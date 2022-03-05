<template>
	<div ref="sigmaContainer" class="sigma-container"></div>
</template>

<script>

export default {
	props: {
		nodes: Array,
		edges: Array,
		hoveredNode: {
			default: undefined,
			type: Number
		},
		hoveredNeighbors: {
			default() {
				return undefined
			},
			type: Array
		}
	},
	mounted() {
		const { Sigma } = require("sigma")
		const { Graph } = require("graphology")
		const container = this.$refs.sigmaContainer

		const graph = new Graph();

		this.nodes.forEach((node) => graph.addNode(node.id,
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

		const renderer = new Sigma(graph, container)

		const state = {  };

		function setHoveredNode(node) {
			if (node) {
				state.hoveredNode = node;
				state.hoveredNeighbors = new Set(graph.neighbors(node));
			} else {
				state.hoveredNode = undefined;
				state.hoveredNeighbors = undefined;
			}

			// Refresh rendering:
			renderer.refresh();
		}

		

		// Bind graph interactions:
		renderer.on("enterNode", ({ node }) => {
			setHoveredNode(node);
		});
		renderer.on("leaveNode", () => {
			setHoveredNode(undefined);
		});

		// Render nodes accordingly to the internal state:
		// 1. If a node is selected, it is highlighted
		// 2. If there is query, all non-matching nodes are greyed
		// 3. If there is a hovered node, all non-neighbor nodes are greyed
		renderer.setSetting("nodeReducer", (node, data) => {
			const res = { ...data };

			if (state.hoveredNeighbors && !state.hoveredNeighbors.has(node) && state.hoveredNode !== node) {
				res.label = "";
				res.color = "#f6f6f6";
				res.hidden = true
			}

			return res;
		});

		// Render edges accordingly to the internal state:
		// 1. If a node is hovered, the edge is hidden if it is not connected to the
		//    node
		// 2. If there is a query, the edge is only visible if it connects two
		//    suggestions
		renderer.setSetting("edgeReducer", (edge, data) => {
			const res = { ...data };

			if (state.hoveredNode && !graph.hasExtremity(edge, state.hoveredNode)) {
				res.hidden = true;
			}

			return res;
		});

		console.log(renderer)
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