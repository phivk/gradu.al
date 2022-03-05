<template>
	<div ref="sigmaContainer" class="sigma-container"></div>
</template>

<script>

let sigma

export default {
	props: {
		nodes: Array,
		edges: Array,
	},
	mounted() {
		const { Sigma } = require("sigma")
		const { Graph } = require("graphology")
		const container = this.$refs.sigmaContainer

		const graph = new Graph();

		this.nodes.forEach((node) => console.log(node) || graph.addNode(node.id,
			{
				x: Math.floor(Math.random() * 500),
				y: Math.floor(Math.random() * 500), 
				size: 7, 
				label: node.name, 
				color: node._cssClass === "Skill" ? "#4ba45b" : "#184eb5"
			}))

		const completedEdges = []
		this.edges.forEach((edge) => {
			if (!completedEdges.includes(`${edge.sid}${edge.tid}`)) {
				graph.addEdge(edge.sid, edge.tid, { color: edge._color, type: "arrow", size: 3 })
				completedEdges.push(`${edge.sid}${edge.tid}`)
			}
		})

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