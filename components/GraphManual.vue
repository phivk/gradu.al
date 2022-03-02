<template>
  <div>
    <svg class="h0">
      <defs>
        <marker
          id="m-end"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z"></path>
        </marker>
        <marker
          id="m-start"
          markerWidth="6"
          markerHeight="6"
          refX="-4"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <rect width="3" height="6"></rect>
        </marker>
      </defs>
    </svg>
    <div class="relative">
      <d3-network
        ref="net"
        :net-nodes="showConnected ? nodesConnected : nodes"
        :net-links="showConnected ? edgesConnected : edges"
        :options="options"
        :link-cb="lcb"
      />
      <div class="absolute bottom-0 left-0 m-4 hover-opaque">
        <div class="flex items-center">
          <div class="flex items-center m-2">
            <input
              class=""
              type="range"
              min="2000"
              max="5000"
              v-model:value="force"
              id="graphSpacing"
            />
            <label class="ml-2" for="graphSpacing">Spacing</label>
          </div>
          <div class="flex items-center m-4">
            <input type="checkbox" id="checkbox" v-model="showConnected" />
            <label for="checkbox" class="ml-2"
              >Only show connected interests</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="vue-d3-network/dist/vue-d3-network.css"></style>
<script>
import D3Network from "vue-d3-network";
export default {
  components: {
    D3Network,
  },
  props: {
    nodes: Array,
    edges: Array,
  },
  data() {
    return {
      nodeSize: 15,
      canvas: false,
      offsetX: 0,
      offsetY: 0,
      startX: 0,
      startY: 0,
      lastTouch: null,
      force: 3500,
      offsetY: 0,
      showConnected: true,
    };
  },
  computed: {
    options() {
      return {
        force: this.force,
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels: true,
        canvas: this.canvas,
        resizeListener: true,
        size: {
          h: 1000,
        },
        offset: {
          x: this.offsetX,
          y: this.offsetY,
        },
      };
    },
    edgeCountPerSkill() {
      return this.edges
        .map((item) => item.tid)
        .reduce((a, c) => {
          const tids = a;
          a[c] = a[c] ? a[c] + 1 : 1;
          return tids;
        }, {});
    },
    nodesConnected() {
      return this.nodes.filter((node) => this.edgeCountPerSkill[node.id] !== 1);
    },
    edgesConnected() {
      return this.edges.filter(
        (edge) => this.edgeCountPerSkill[edge.tid] !== 1
      );
    },
  },
  methods: {
    lcb(link) {
      link._svgAttrs = { "marker-end": "url(#m-end)" };
      return link;
    },
  },
};
</script>
<style>
.net {
  background-color: white;
  border-radius: 8px;
  height: 100%;
  margin: 0;
}

circle.Skill.node {
  fill: #4ba45b;
}

circle.Member.node {
  fill: #184eb5;
}

.node {
  stroke: alpha(red, 0.7);
  stroke-width: 3px;
  transition: fill 0.5s ease;
  fill: white;
}

path.learner {
  stroke: black;
}

path.sharer {
  stroke: blue;
}

.node,
.link {
  stroke-linecap: round;
}

.curve {
  fill: none;
}

.node-label {
  /* fill: black; */
  font-size: 1.1rem;
}

.memberLabel {
  fill: blue;
}

.skillLabel {
  fill: green;
}

#m-end path,
#m-start {
  fill: rgba(18, 120, 98, 0.8);
}

.h0 {
  height: 0;
}

.hover-opaque {
  opacity: 0.5;
  transition: opacity 0.5s;
}
.hover-opaque:hover {
  opacity: 1;
}
</style>
