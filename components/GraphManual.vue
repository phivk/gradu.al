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
        :net-nodes="nodes"
        :net-links="edges"
        :options="options"
        :link-cb="lcb"
      />
      <div class="absolute bottom-0 left-0 mw6 m-4 br3 tl hover-opaque">
        <label class="db mb-1">Spacing</label>
        <input class="db" type="range" min="2000" max="5000" v-model:value="force" />
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
      force: 2500,
      offsetY: 0,
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
  opacity: 50%;
  transition: opacity 0.5s;
}
.hover-opaque:hover {
  opacity: 100%;
}
</style>
