<template>
  <div>
    <article class="flex relative flex-col">
      <div class="grid content-center w-1/2 mx-auto">
        <Transition>
          <div v-frag>
            <component
              :is="currentState.component"
              :introduction="currentState.introduction"
              :value="currentState.value"
              :followup="currentState.followup"
              :options="currentState.options"
              @update="currentState.updateFunction"
              :textarea="currentState.textarea"
              :key="stateIndex"
            />

            <div class="left">
              <div v-if="stateIndex === 0">
                <div>
                  <button @click="nextStep()">Start</button>
                  <span class="text-xs">press <strong>Enter</strong> ↵</span>
                  <p class="text-xs mt-2">🕒 Takes 4 minutes</p>
                </div>
              </div>

              <button v-if="hasPreviousState" @click="previousStep">
                Previous
              </button>
              <button v-if="hasNextState && stateIndex > 0" @click="nextStep">
                Next
              </button>
              <button v-if="!hasNextState" @click="submitForm">Submit</button>
            </div>
          </div>
        </Transition>
      </div>
      <div class="flex flex-wrap p-4">
        <ProgressBar :percentage="percentage" class="mx-2 mb-2" />
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

const COMMUNITY_NAME = process.env.COMMUNITY_NAME;

export default {
  mounted: function () {
    window.addEventListener("keyup", (e) => {
      this.keyboardControl(e);
    });
  },
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
            "Hi! 👋 This is an invitation to connect to other MozFest participants via skills, interests and fascinations.",
          followup:
            "Your input will be used to connect you with other participants on Slack and will be shown on the MozFest Gradual page.",
          updateFunction: () => {},
        },
        {
          component: FormSingleField,
          introduction: "What's your @UserName on the MozFest Slack?",
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
            "These are some topics suggested by other Mozfest participants! <br/> Anything here <strong>you'd like to learn</strong> more about?",
          options: this.currentLearning,
          value: this.formData.learnings,
          updateFunction: (learnings) => {
            this.setSingleField("learnings", learnings);
          },
        },
        {
          component: FormMultipleSelect,
          introduction:
            "Here are some popular topics MozFest participants would like to learn.  <br/>Anything here <strong>you could share</strong> something about?",
          value: this.formData.sharings,
          options: this.currentSharing,
          updateFunction: (sharings) => {
            this.setSingleField("sharings", sharings);
          },
        },
        {
          component: FormMultipleInput,
          introduction: "Are there any other things you would like to learn?",
          followup:
            "Please write it in a way others will understand. For example: 'how to start a book club'.",
          value: this.formData.newLearnings,
          updateFunction: (value) => {
            this.setSingleField("newLearnings", value);
          },
        },
        {
          component: FormMultipleInput,
          introduction: "Now, are there skills you would like to share?",
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
          followup: "	Anything else you want to tell us before you go?",
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
      return Math.ceil(((this.stateIndex + 1) / this.states.length) * 100);
    },
  },
  components: {
    FormIntro,
    FormSingleField,
    FormMultipleInput,
    FormMultipleSelect,
    ProgressBar,
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
    add() {},
    keyboardControl(e) {
      if (["Enter"].includes(e.key)) this.add() || this.nextStep();
    },
    setSingleField(field, value) {
      this.formData[field] = value;
    },
    addToArray(field, value) {
      this.formData[field].push(value);
    },
    async submitForm() {
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
        const { data: newUserData } = await this.$supabase
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
        const { data } = await this.$supabase
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
<style  lang="postcss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

button {
  @apply bg-blue-500 text-white px-3 py-2 rounded mt-4;
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