<template>
	<div>
		<article>
			<section :class="animation">
				<FormIntro v-if="formPosition === 0" />
				<FormName v-if="formPosition === 1" />
				<FormLearning v-if="formPosition === 2" />
				<FormSharing v-if="formPosition === 3" />
				<FormNewLearning v-if="formPosition === 4" />
				<FormNewSharing v-if="formPosition === 5" />
				<FormFinal v-if="formPosition === 6" />
				<div>
					<button v-if="formPosition === 0" @click="formPosition = 1">Start</button>
					<button v-if="formPosition > 0" @click="previousStep">Previous</button>

					<button v-if="formPosition < 6 && formPosition > 0" @click="nextStep">
						Next
					</button>
					<button v-if="formPosition === 6">
						Enter
					</button>

				</div>
			</section>
		</article>
	</div>
</template>
<script>
import FormIntro from "./FormIntro.vue";
import FormName from "./FormName.vue"
import FormLearning from "./FormLearning.vue"
import FormSharing from "./FormSharing.vue"
import FormNewLearning from "./FormNewLearning.vue"
import FormNewSharing from "./FormNewSharing.vue"
import FormFinal from "./FormFinal.vue"

export default {
	props: {
		currentTopics: Array,
		currentMembers: Array
	},
	mounted: function () {
		window.addEventListener('keyup', (e) => { this.keyboardControl(e) })
	},
	data: () => {
		return {
			formPosition: 0,
			animation: 'animate-in',
		}
	},
	computed: {
		currentLearning: function () {
			// TODO: Use the mapping table somehow
			return this.currentTopics
		},
		currentSharing: function () {
			return this.currentTopics
		}
	},
	components: {
		FormIntro,
		FormName,
		FormLearning,
		FormSharing,
		FormNewLearning,
		FormNewSharing,
		FormFinal
	},
	methods: {
		nextStep() {
			this.animation = 'animate-out';
			setTimeout(() => {
				this.animation = 'animate-in';
				this.formPosition += 1;
			}, 600);
		},
		previousStep() {
			this.animation = 'animate-out';
			setTimeout(() => {
				this.animation = 'animate-in';
				this.formPosition -= 1;
			}, 600);
		},
		keyboardControl(e) {
			if (["Enter", "ArrowRight", "ArrowDown"].includes(e.key)) this.nextStep()
			if (["ArrowUp", "ArrowLeft"].includes(e.key)) this.previousStep()
		}
	}
}
</script>
<style>
.animation-in {
	transform-origin: left;
	animation: in .6s ease-in-out;
}

.animation-out {
	transform-origin: bottom left;
	animation: out .6s ease-in-out;
}
</style>