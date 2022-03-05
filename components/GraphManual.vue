<template>
	<div ref="sigmaContainer" class="sigma-container" ></div>
</template>

<script>

let sigma

export default {
	mounted() {
		const { Sigma } = require("sigma")
		const { Graph } = require("graphology")
		const container = this.$refs.sigmaContainer

		const graph = new Graph();

		graph.addNode('John', { x: 0, y: 10, size: 5, label: 'John', color: 'blue' })
		graph.addNode('Mary', { x: 10, y: 0, size: 3, label: 'Mary', color: 'red' })
		graph.addEdge('John', 'Mary')

		window.sigma = new Sigma(graph, container)
	}
}
</script>

<style>
.sigma-container {
  display: fixed;
  width: 100vw;
  height: 100vh;
}
</style>