<template>
	<div>
		<FormContainer :currentTopics="currentTopics" :currentMembers="currentMembers" />
	</div>
</template>
<script>
import FormContainer from '../components/FormContainer.vue'
export default {
	name: 'App',
	components: {
		FormContainer
	},
	data: () => {
		return {
			currentTopics: [],
			currentMembers: []
		}
	},
	async mounted() {
		const { data: topics, error: topicError } = await this.$supabase.from("topics").select("*");
		const { data: members, error: memberError } = await this.$supabase.from("members").select("*")
		if (!topicError) {
			this.currentTopics = topics;
		}
		if (!memberError) {
			this.currentMembers = members
		}
	},
}
</script>
<style>
</style>