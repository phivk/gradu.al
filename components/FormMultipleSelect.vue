<template>
	<div v-frag>
		<p>
			{{ introduction }}
		</p>
		<ul class="block">
			<li v-for="option in options" @click="toggleOption(option.id)" :class="selected(option.id)">
				{{ option.name }}
			</li>
		</ul>
	</div>
</template>
<script>
// TODO: Combo box - seachable dropdown/list with search filter
export default {
	props: { options: Array, introduction: String, value: Array },
	data() {
		return {
			selections: []
		}
	},
	mounted() {
		console.log("remounted", this.selections, this.value)
		this.selections = this.value
	},
	methods: {
		selected(id) {
			return this.selections.map(item => item.id).includes(id) ? `shared selected` : `shared`
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
<style lang="postcss" scoped>
.shared {
	width: 100%;
	margin: auto;
	align-items: center;
	max-width: 100%;
	min-height: 40px;
	min-width: 75px;
	color: rgb(119, 119, 119);
	background-color: rgba(119, 119, 119, 0.1);
	box-shadow: rgba(119, 119, 119, 0.6) 0px 0px 0px 1px inset;
	outline-color: rgb(119, 119, 119);
	outline-style: none;
	outline-width: 0px;
	transition-duration: 0.1s;
	transition-property: background-color, color, border-color, opacity, box-shadow;
	transition-timing-function: ease-out;
	border-radius: 4px;
	@apply p-4 my-1 cursor-pointer;
}

.selected {
	position: relative;
	background-color: rgba(255, 255, 255, 0.1);
	box-shadow: rgba(255, 255, 255, 0.8) 0px 0px 0px 2px inset;
	color: rgb(255, 255, 255);
	animation: 0.25s ease 0s 2 normal none running jBPXGM;
}
</style>