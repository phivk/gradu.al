<template>
	<div>
		<h1>Randome user</h1>
		<h3>Let's get a random topic!</h3>
		<div>
			<button @click="getData">Get random topic</button>
		</div>
		<p>{{ JSON.stringify(supabase.nodes) }}</p>
	</div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
	computed: mapState(['supabase']),
	methods: {
		...mapActions("supabase", ['getData'])
	}
}

</script>