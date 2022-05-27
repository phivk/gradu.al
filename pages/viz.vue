<template>
	<div>
		<GraphManualKey class="text-left" />
		<GraphManual :nodes="nodes" :edges="edges" />
		<MostPopularSkillsSection v-if="skills" :skills="skills"> </MostPopularSkillsSection>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import GraphManualKey from "../components/GraphManualKey.vue";
import GraphManual from "../components/GraphManual.vue";
import MostPopularSkillsSection from "../components/MostPopularSkillsSection.vue";
export default {
	name: "App",
	components: {
		GraphManualKey,
		GraphManual,
		MostPopularSkillsSection,
	},
	methods: {
		...mapActions("supabase", ['fetchData'])
	},
	computed: {
		skills() {
			return this.nodes.filter(item => item["_cssClass"] === "Skill")
		},
		nodes() {
			return JSON.parse(JSON.stringify(this.$store.state.supabase.nodes))
		},
		edges() {
			return JSON.parse(JSON.stringify(this.$store.state.supabase.edges))
		},
		...mapState(['supabase']),

	},
	async mounted() {
		await this.fetchData()
	},
};


</script>
