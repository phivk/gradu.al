<template lang="">
<div>
   <div class="title">
    <!-- example control -->
    <ul class="menu">
      <li>
        <label> Node size  </label>
        <input type="range" min="1" max="100" v-model='nodeSize' /> {{ options.nodeSize }}
      </li>
      <li>
        <label>Render as  </label>
      <input type="radio" :value='false' v-model='canvas' />
      <label>SVG</label>
      <input type="radio" :value='true' v-model='canvas' />
      <label>Canvas</label>
      </li>
    </ul>
    </div>
    <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" />
    </div>
</template>
<script>
import D3Network from 'vue-d3-network'
export default({
  components: {
    D3Network
  },
  data () {
    return {
      nodes: [
        { id: 1, name: 'my awesome node 1'},
        { id: 2, name: 'my node 2'},
        { id: 3, name:'orange node', _color: 'orange' },
        { id: 4, _color: '#4466ff'},
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
      ],
      links: [
        { sid: 1, tid: 2 },
        { sid: 2, tid: 8 },
        { sid: 3, tid: 4,  _svgAttrs:{'stroke-width':8,opacity:1},name:'custom link' },
        { sid: 4, tid: 5 },
        { sid: 5, tid: 6 },
        { sid: 7, tid: 8 },
        { sid: 5, tid: 8 },
        { sid: 3, tid: 8 },
        { sid: 7, tid: 9 }
      ],
      nodeSize:20,
      canvas:false

    }
  },
  computed:{
    options(){
      return{
        force: 3000,
        size:{ w:600, h:600},
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels:true,
        canvas: this.canvas
      }
    }
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

body{
  font-family: 'PT Sans', sans-serif;
  background-color: #eee;
}
.title{
  position:absolute;
  text-align: center;
  left: 2em;
}
h1,a{
  color: #1aad8d;
  text-decoration: none;
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

</style>
