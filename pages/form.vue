<template>
	<div>
		<FormContainer :currentTopics="currentTopics" :currentMembers="currentMembers" :mapping="mapping" />
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
			currentMembers: [],
			mapping: []
		}
	},
	async mounted() {
		const { data: topics, error: topicError } = await this.$supabase.from("topics").select("*");
		const { data: members, error: memberError } = await this.$supabase.from("members").select("*");
		const { data: mapping, error: mappingError } = await this.$supabase.from("members_topics").select("*");

		if (!topicError) {
			this.currentTopics = topics;
		}
		if (!memberError) {
			this.currentMembers = members
		}

		if (!mappingError) {
			this.mapping = mapping
		}
	},
}
</script>
<style>
</style>