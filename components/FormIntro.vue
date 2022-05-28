<template>
	<div v-frag>
		<p class="font-bold">
			{{ introduction }}
		</p>
		<p class="font-light">
			{{ followup }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		introduction: String,
		followup: String,
	},
}
</script>