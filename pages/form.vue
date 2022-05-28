<template>
	<div>
		<FormContainer />
	</div>
</template>
<script>
import { mapActions } from 'vuex'

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
	methods: {
		...mapActions("supabase", ['fetchData'])
	},
	mounted() {
		this.fetchData()
	},
}
</script>