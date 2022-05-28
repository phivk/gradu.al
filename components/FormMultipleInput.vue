<template>
	<div v-frag>
		<p class="font-bold">{{ introduction }}</p>
		<p class="font-light">{{ followup }}</p>
		<div class="flex">
			<input
				class=" border-0 border-gray border-b-2  my-4 bg-transparent  w-75 focus:outline-none focus:border-black active:outline-none"
				v-model="newValue" :placeholder="answers.length > 0 ? 'Add another' : 'Add something you want to learn'" />
			<button class="bg-blue-500 text-white px-2 py-1 rounded mt-4 ml-3" @click="addValue()">Add</button>
		</div>
		<div v-if="answers.length > 0">
			<p>You've added:</p>
			<ul>
				<li class="list-disc my-2" v-for="answer in answers">{{ answer }}</li>
			</ul>
		</div>
	</div>

</template>
<script>
export default {
	props: {
		introduction: String,
		followup: String,
		value: Array
	},
	data() {
		return {
			answers: [],
			newValue: ""
		}
	},
	mounted() {
		this.answers = [...this.value]
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