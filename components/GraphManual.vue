<template lang="">
<div>
  <svg >
  <defs>
    <marker id="m-end" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth" >
      <path d="M0,0 L0,6 L9,3 z"></path>
    </marker>
        <marker id="m-start" markerWidth="6" markerHeight="6" refX="-4" refY="3" orient="auto" markerUnits="strokeWidth" >
      <rect width="3" height="6"></rect>
    </marker>
  </defs>
</svg>
  <d3-network
    ref='net'
    :net-nodes="nodes"
    :net-links="edges"
    :options="options"
    :link-cb="lcb"
  />
</div>
</template>
<style src="vue-d3-network/dist/vue-d3-network.css"></style>
<script>
import D3Network from 'vue-d3-network';
export default({
  components: {
    D3Network,
  },
  props: {
    nodes: Array,
    edges: Array
  },
  data () {
    return {
      nodeSize: 15,
      canvas: false,
      offsetX: 0,
      offsetY: 0,
      startX: 0,
      startY: 0,
      lastTouch: null
    }
  },
  computed:{
    options(){
      return{
        force: 1000,
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels:true,
        canvas: this.canvas,
        resizeListener: true,
        size: {
          h: 1000
        },
        offset: {
          x: this.offsetX,
          y: this.offsetY
        }
      }
    }
  },
  methods:{
    lcb (link) {
      link._svgAttrs = { 'marker-end': 'url(#m-end)' }
      return link
    },
    touchMove(e){
      if(!this.lastTouch) {
        this.lastTouch = e.targetTouches[0]
        return;
      }
      this.offsetX = this.offsetX + e.targetTouches[0].clientX - this.lastTouch.clientX
      this.offsetY = this.offsetY - this.lastTouch.clientY + e.targetTouches[0].clientY
      this.lastTouch = e.targetTouches[0]
    },
    touchStart(e) {
      console.log(e,e.touches[0])
      this.startX = e.touches[0] ? e.touches[0].clientX : 0
      this.startY = e.touches[0] ? e.touches[0].clientY : 0

    },
    touchEnd(e) {
      console.log(this.startX, this.startY )
      const endX = e.touches[0] ? e.touches[0].clientX : 0;
      const endY = e.touches[0] ? e.touches[0].clientY : 0;
      this.offsetX = this.offsetX + endX - this.startX;
      this.offsetY = this.offsetY + endY - this.startY;
    },
    positionOnDown(e){
      this.startX = e.clientX
      this.startY = e.clientY
    },
    changePositionOnUp(e){
      this.offsetX = this.offsetX + e.clientX - this.startX
      this.offsetY = this.offsetY + e.clientY - this.startY
    }
  },
})
</script>
<style >
  .net {
    background-color: white;
    border-radius: 8px
  }

  ul.menu {
    list-style: none;
    position: absolute;
    z-index: 100;
    min-width: 20em;
    text-align: left;
  }

  ul.menu li{
    margin-top: 1em;
    position: relative;
  }

  circle.Skill.node {
    fill:#4ba45b;
  }

  circle.Member.node {
    fill: #184eb5;
  }

  .net {
    height: 100%;
    margin: 0;
   }

  .node{
    stroke: alpha(red, 0.7);
    stroke-width: 3px;
    transition: fill 0.5s ease;
    fill: white;
  }

  path.learner{
    stroke: black;
  }

  path.sharer{
    stroke: blue;
  }

  .node, .link {
    stroke-linecap: round;
  }

  .curve{
    fill: none;
  }

  .node-label{
    /* fill: black; */
    font-size: 1.1rem;
  }

  .memberLabel {
    fill: blue;
  }

  .skillLabel {
    fill: green;
  }
    #m-end path, #m-start{
    fill: rgba(18, 120, 98, 0.8);
  }

</style>
