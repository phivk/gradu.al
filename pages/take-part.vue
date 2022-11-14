<template>
	<div>
		<FormContainer />
	</div>
</template>
<script>
import { mapActions } from "vuex";

export default {
	name: "App",
	data: () => {
		return {
			currentTopics: [],
			currentMembers: [],
			mapping: [],
		};
	},
	methods: {
		...mapActions("supabase", ["fetchData"]),
	},
	mounted() {
		this.fetchData();
	},
};
</script>
