<template>
  <div class="w-full max-w-3xl mx-auto p-2">
    <article class="flex relative flex-col">
      <div class="flex flex-wrap py-8">
        <ProgressBar :percentage="percentage" />
      </div>
      <div class="grid content-center w-full max-w-3xl mx-auto">
        <Transition>
          <div v-frag>
            <component
              :is="currentState.component"
              :required="currentState.required"
              :introduction="currentState.introduction"
              :value="currentState.value"
              :followup="currentState.followup"
              :options="currentState.options"
              @update="currentState.updateFunction"
              :textarea="currentState.textarea"
              :key="stateIndex"
              @nextStep="nextStep()"
            />

            <div class="left mt-8">
              <div v-if="stateIndex === 0">
                <div class="text-center">
                  <button class="button-secondary" @click="nextStep()">
                    Start
                  </button>
                  <span class="text-xs">press <strong>Enter</strong> ↵</span>
                  <p class="text-xs mt-2">🕒 Takes 3 minutes</p>
                </div>
              </div>

              <button
                class="button-secondary-inverse"
                v-if="hasPreviousState"
                @click="previousStep"
              >
                Previous
              </button>
              <button
                :disabled="nextStepDisabled"
                class="button-secondary"
                :class="{ 'opacity-50': nextStepDisabled }"
                v-if="hasNextState && stateIndex > 0"
                @click="nextStep"
              >
                Next
              </button>
              <button
                class="button-primary"
                v-if="!hasNextState"
                @click="submitForm"
              >
                Submit
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </article>
  </div>
</template>
<script>
import { mapState } from "vuex";

import FormIntro from "./FormIntro.vue";
import FormSingleField from "./FormSingleField.vue";
import FormMultipleSelect from "./FormMultipleSelect.vue";
import FormMultipleInput from "./FormMultipleInput.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  data: () => {
    return {
      stateIndex: 0,
      submitting: false,
      formData: {
        username: "",
        learnings: [],
        sharings: [],
        newLearnings: [],
        newSharings: [],
        comment: "",
      },
    };
  },
  computed: {
    ...mapState(["supabase"]),
    currentLearning: function () {
      return this.$store.state.supabase.topics;
    },
    currentSharing: function () {
      return this.$store.state.supabase.topics;
    },
    states() {
      return [
        {
          component: FormIntro,
          introduction:
            "<strong>Hi! 👋 This is an invitation to connect with others in the community via skills, interests and fascinations.</strong>",
          followup:
            "Your input will be used to connect you with other participants and will be shown on the main page.",
          updateFunction: () => {},
        },
        {
          component: FormSingleField,
          required: true,
          introduction:
            "What's your <strong>@UserName</strong> on the community Slack?",
          followup:
            "Please write down your exact user name, including the @ sign.",
          value: this.formData.username,
          updateFunction: (value) => {
            this.setSingleField("username", value);
          },
        },
        {
          component: FormMultipleSelect,
          introduction:
            "These are some topics suggested by others! <br/> Anything here <strong>you'd like to learn</strong> more about?",
          options: this.currentLearning,
          value: this.formData.learnings,
          updateFunction: (learnings) => {
            this.setSingleField("learnings", learnings);
          },
        },
        {
          component: FormMultipleSelect,
          introduction:
            "Here are some popular topics others would like to learn.  <br/>Anything here <strong>you could share</strong> something about?",
          value: this.formData.sharings,
          options: this.currentSharing,
          updateFunction: (sharings) => {
            this.setSingleField("sharings", sharings);
          },
        },
        {
          component: FormMultipleInput,
          introduction:
            "Are there any other things you would like to <strong>learn</strong>?",
          followup:
            "Please write it in a way others will understand. For example: 'how to start a book club'.",
          value: this.formData.newLearnings,
          updateFunction: (value) => {
            this.setSingleField("newLearnings", value);
          },
        },
        {
          component: FormMultipleInput,
          introduction:
            "Now, are there skills you would like to <strong>share</strong>?",
          followup:
            "Think stories, skills, methods, shortcuts, failures, successes or tips and tricks. Anything goes, don't be shy!",
          value: this.formData.newSharings,
          updateFunction: (value) => {
            this.setSingleField("newSharings", value);
          },
        },
        {
          component: FormSingleField,
          introduction: `Thank you, ${this.formData.username}!`,
          followup: " Anything else you want to tell us before you go?",
          value: this.formData.comment,
          updateFunction: (value) => {
            this.setSingleField("comment", value);
          },
          textarea: true,
        },
      ];
    },
    hasNextState() {
      return this.stateIndex < this.states.length - 1;
    },
    hasPreviousState() {
      return this.stateIndex > 0;
    },
    currentState() {
      return this.states[this.stateIndex];
    },
    percentage() {
      return Math.ceil((this.stateIndex / (this.states.length - 1)) * 100);
    },
    nextStepDisabled() {
      return this.currentState.required && !this.currentState.value;
    },
  },
  methods: {
    nextStep() {
      if (this.hasNextState) {
        this.stateIndex += 1;
        window.scrollTo(0, 0);
      }
    },
    previousStep() {
      this.stateIndex -= 1;
    },
    setSingleField(field, value) {
      this.formData[field] = value;
    },
    addToArray(field, value) {
      this.formData[field].push(value);
    },
    async submitForm() {
      const COMMUNITY_NAME = this.$config.communityName;

      // Potentially show some processing interstitial
      this.submitting = true;
      // Get or create the user
      const { data: userData } = await this.$supabase
        .from(`${COMMUNITY_NAME}_members`)
        .select("*")
        .eq("username", this.formData.username);
      let user;
      // Username doesn't exist in the database
      if (userData.length === 0) {
        const { data: newUserData, error } = await this.$supabase
          .from(`${COMMUNITY_NAME}_members`)
          .insert({ username: this.formData.username });
        user = newUserData[0];
      } else {
        user = userData[0];
      }
      // For each of the learnings, create a new connection

      this.formData.learnings.forEach(async (learning) => {
        await this.$supabase.from(`${COMMUNITY_NAME}_members_topics`).insert({
          topic: learning.id,
          learner: user.id,
        });
      });
      // For each of the sharings, create a new connection
      this.formData.sharings.forEach(async (sharing) => {
        await this.$supabase.from(`${COMMUNITY_NAME}_members_topics`).insert({
          topic: sharing.id,
          sharer: user.id,
        });
      });
      // For each of the new learnings, create a topic and a connection
      this.formData.newLearnings.forEach(async (learning) => {
        const { data, error } = await this.$supabase
          .from(`${COMMUNITY_NAME}_topics`)
          .insert({
            name: learning,
          });
        await this.$supabase.from(`${COMMUNITY_NAME}_members_topics`).insert({
          topic: data[0].id,
          learner: user.id,
        });
      });
      // For each of the new sharings, create a topic and a connection
      this.formData.newSharings.forEach(async (sharing) => {
        const { data } = await this.$supabase
          .from(`${COMMUNITY_NAME}_topics`)
          .insert({
            name: sharing,
          });
        await this.$supabase.from(`${COMMUNITY_NAME}_members_topics`).insert({
          topic: data[0].id,
          sharer: user.id,
        });
      });
      // Post the additional comments somewhere - user object?
      await this.$supabase.from(`${COMMUNITY_NAME}_members`).upsert({
        ...user,
        comment: this.formData.comment,
      });
      // Show success and redirect
      this.submiting = false;
      this.$nuxt.$router.push("/");
    },
  },
};
</script>
<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.background {
  display: inline-block;
  z-index: -20;
  line-height: 0;
  opacity: 1;
  background-color: rgb(93, 27, 84);
  background-image: url("https://images.typeform.com/images/mbyFNGQ86pxv/background/large");
  background-position: center top;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
