<template>
	<div v-frag>
		<p class="font-bold">{{ introduction }}</p>
		<p class="font-light">{{ followup }}</p>
		<input
			class=" border-0 border-gray border-b-2  my-4 bg-transparent  focus:outline-none focus:border-black active:outline-none"
			v-if="!textarea" type="text" placeholder="Type your answer here..." v-model="field" @input="update" />
		<textarea
			class=" border-0 border-gray border-b-2  my-4 bg-transparent  focus:outline-none focus:border-black active:outline-none"
			v-if="textarea" type="text" placeholder="Type your answer here..." v-model="field" @input="update" />

	</div>
</template>
<script>
export default {
	props: {
		introduction: String,
		followup: String,
		value: String,
		textarea: Boolean
	},
	data() {
		return {
			field: ''
		}
	},
	mounted() {
		this.field = this.value
	},
	methods: {
		update() {
			this.$emit("update", this.field)
		}
	}
}
</script>
<style lang="postcss" scoped>
</style>