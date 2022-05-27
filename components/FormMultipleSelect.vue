<template>
	<div v-frag>
		<p>
			{{ introduction }}
		</p>
		<ul>
			<li v-for="option in options" @click="toggleOption(option.id)" :class="selected(option.id)">
				{{ option.name }}
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: { options: Array, introduction: String },
	data() {
		return {
			selections: []
		}
	},
	methods: {
		selected(id) {
			return this.options.map(item => item.id).includes(id) ? "selected" : ""
		},
		toggleOption(optionId) {
			let newSelections = this.selections.filter(item => item.id !== optionId)

			// Trying to remove the option didn't change the length, so add it.
			if (newSelections.length === this.selections.length) {
				const targetOption = this.options.filter(item => item.id === optionId)[0]
				newSelections.push(targetOption)
			}

			this.selections = newSelections
			this.$emit("update", this.selections)
		}
	}
}

</script>