<template>
	<div v-frag>
		<p>{{ introduction }}</p>
		<p>{{ followup }}</p>
		<div>
			<input v-model="newValue" placeholder="Add another" />
			<button @click="addValue()">Add</button>
		</div>
		<div v-if="answers.length > 0">
			<p>You've added:</p>
			<ul>
				<li v-for="answer in answers">{{ answer }}</li>
			</ul>
		</div>
	</div>

</template>
<script>
export default {
	props: {
		introduction: String,
		followup: String
	},
	data() {
		return {
			answers: [],
			newValue: ""
		}
	},
	methods: {
		addValue() {
			this.answers.push(this.newValue)
			this.newValue = ""
			this.$emit("update", this.answers)
		}
	},
}
</script>