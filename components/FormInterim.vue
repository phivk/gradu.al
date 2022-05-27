<template>
	<p>You should never see me</p>
</template>
<script>
export default {
	props: {
		value: Number
	},
	mounted() {
		this.$emit("update", value)
	},
}
</script>