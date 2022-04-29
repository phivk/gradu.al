<template>
	<div>
		<div>Just testing ...</div>
		<p>Topics - {{ topics }}</p>
		<p>Members - {{ members }}</p>
		<input v-model="name" placeholder="Insert name" />
		<input v-model="topic" placeholder="Insert topic" />

		<button @click="submitTopic">Submit topic</button>
		<p>{{ updated }}</p>
	</div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
	data() {
		return {
			topics: null,
			topic: "",
			name: "",
			updated: "",
			members: []
		};
	},
	async mounted() {
		const { data: topics, error: topicError } = await this.$supabase.from("topics").select("*");
		const { data: members, error: memberError } = await this.$supabase.from("members").select("*")
		if (!topicError) {
			this.topics = topics;
		}
		if (!memberError) {
			this.members = members
		}
	},
	methods: {
		submitTopic: async function () {
			const { data: user, error: userError } = await this.$supabase
				.from("members")
				.upsert({ username: this.name });
			const { data: learningTopic, error: learningError } = await this.$supabase
				.from("topics")
				.upsert({ name: this.topic });
			await this.$supabase
				.from("members_topics")
				.upsert({ learner: user[0].id, topic: learningTopic[0].id });
		},
	},
});
</script>

<style scoped>
.login-button {
	border: 0;
}
</style>
