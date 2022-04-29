<template>
	<div>
		<p>
			These are some topics suggested by other Mozfest participants! Anything here you'd like to learn more about?
		</p>
		<ul>
			<li v-for="topic in currentLearning" @click="() => { console.log('yo') }">{{ topic.name }}</li>
		</ul>
	</div>
</template>