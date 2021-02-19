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
    {_cssClass: "Member", name:"Amanda Curtis","id": "1"},
    {_cssClass: "Member", name:"anna desponds","id": "2"},
    {_cssClass: "Member", name:"Celine","id": "3"},
    {_cssClass: "Member", name:"Erwin","id": "4"},
    {_cssClass: "Member", name:"Gunnar de Jong","id": "5"},
    {_cssClass: "Member", name:"hay","id": "6"},
    {_cssClass: "Member", name:"HazelXD","id": "7"},
    {_cssClass: "Member", name:"Julia Scott-Stevenson","id": "8"},
    {_cssClass: "Member", name:"Kevin","id": "9"},
    {_cssClass: "Member", name:"magda bochenska","id": "10"},
    {_cssClass: "Member", name:"Marsha","id": "11"},
    {_cssClass: "Member", name:"Philo","id": "12"},
    {_cssClass: "Member", name:"Pim","id": "13"},
    {_cssClass: "Member", name:"Serena M","id": "14"},
    {_cssClass: "Member", name:"Sterre de Jong","id": "15"},
    {_cssClass: "Member", name:"Ties","id": "16"},
    {_cssClass: "Member", name:"1coko","id": "17"},
    {_cssClass: "Skill",	name:"How to improve user engagement","id": "18"},
    {_cssClass: "Skill",	name:"best practices in hybrid experience building","id": "19"},
    {_cssClass: "Skill",	name:"better group work management","id": "20"},
    {_cssClass: "Skill",	name:"daily hacks for smarter living","id": "21"},
    {_cssClass: "Skill",	name:"electronics, bits and atoms","id": "22"},
    {_cssClass: "Skill",	name:"German Language","id": "23"},
    {_cssClass: "Skill",	name:"non-linear scriptwriting","id": "24"},
    {_cssClass: "Skill",	name:"science communication","id": "25"},
    {_cssClass: "Skill",	name:"Podcasting","id": "26"},
    {_cssClass: "Skill",	name:"French","id": "27"},
    {_cssClass: "Skill",	name:"Polish","id": "28"},
    {_cssClass: "Skill",	name:"How to handle conversations with xenophobes and racists","id": "29"},
    {_cssClass: "Skill",	name:"Python","id": "30"},
    {_cssClass: "Skill",	name:"Creating interactive web experiences","id": "31"},
    {_cssClass: "Skill",	name:"writing successful newsletters","id": "32"},
    {_cssClass: "Skill",	name:"creating a MVP","id": "33"},
    {_cssClass: "Skill",	name:"appreciate slower forms of art","id": "34"},
    {_cssClass: "Skill",	name:"colour","id": "35"},
    {_cssClass: "Skill",	name:"Compassionate UX","id": "36"},
    {_cssClass: "Skill",	name:"creating shared narratives more effectively & spontaneously","id": "37"},
    {_cssClass: "Skill",	name:"effective altruism","id": "38"},
    {_cssClass: "Skill",	name:"Frameworks for effective design","id": "39"},
    {_cssClass: "Skill",	name:"generous interfaces","id": "40"},
    {_cssClass: "Skill",	name:"how our thinking shapes our worlds","id": "41"},
    {_cssClass: "Skill",	name:"how we can work for equity and justice","id": "42"},
    {_cssClass: "Skill",	name:"identifying birds from their song","id": "43"},
    {_cssClass: "Skill",	name:"identifying food for foraging","id": "44"},
    {_cssClass: "Skill",	name:"language of critique","id": "45"},
    {_cssClass: "Skill",	name:"patterns/languages/mental models","id": "46"},
    {_cssClass: "Skill",	name:"typography","id": "47"},
    {_cssClass: "Skill",	name:"Creating effective screencasts","id": "48"},
    {_cssClass: "Skill",	name:"Digital gardening","id": "49"},
    {_cssClass: "Skill",	name:"Educational theory/pedagogy","id": "50"},
    {_cssClass: "Skill",	name:"Coaching/Active listening","id": "51"},
    {_cssClass: "Skill",	name:"Maths in the world","id": "52"},
    {_cssClass: "Skill",	name:"Problem solving","id": "53"},
    {_cssClass: "Skill",	name:"magic tricks","id": "54"},
    {_cssClass: "Skill",	name:"setting up marketing campaign (practical on social or print?)","id": "55"},
    {_cssClass: "Skill",	name:"story myths","id": "56"},
    {_cssClass: "Skill",	name:"Tools and theory for creating stories on the web","id": "57"},
    {_cssClass: "Skill",	name:"Ways to create stories that are inclusive, accessible and non-violent","id": "58"},
    {_cssClass: "Skill",	name:"Frontend/Web development","id": "59"},
    {_cssClass: "Skill",	name:"best practises of innovative storytelling","id": "60"},
    {_cssClass: "Skill",	name:"distribution strategies for innovative storytelling approaches","id": "61"},
    {_cssClass: "Skill",	name:"Investigative journalism","id": "62"},
    {_cssClass: "Skill",	name:"Multimedia journalism","id": "63"},
    {_cssClass: "Skill",	name:"Solutions journalism","id": "64"},
    {_cssClass: "Skill",	name:"Engaged journalism","id": "65"},
    {_cssClass: "Skill",	name:"Entrepreneurship","id": "66"},
    {_cssClass: "Skill",	name:"How do we practice curiosity","id": "67"},
    {_cssClass: "Skill",	name:"Indian cuisine","id": "68"},
    {_cssClass: "Skill",	name:"Interview techniques","id": "69"},
    {_cssClass: "Skill",	name:"Making non-traditional games","id": "70"},
    {_cssClass: "Skill",	name:"creativity & machine learning","id": "71"},
    {_cssClass: "Skill",	name:"long form writing","id": "72"},
    {_cssClass: "Skill",	name:"story/idea development","id": "73"},
    {_cssClass: "Skill",	name:"best practices for immersive storytelling online","id": "74"},
    {_cssClass: "Skill",	name:"workshop design and tips","id": "75"},
    {_cssClass: "Skill",	name:"ux design and research","id": "76"},
    {_cssClass: "Skill",	name:"web project planning and roadmapping","id": "77"},
    {_cssClass: "Skill",	name:"motion graphics","id": "78"},
    {_cssClass: "Skill",	name:"procreate","id": "79"},
    {_cssClass: "Skill",	name:"lock-picking","id": "80"},
    {_cssClass: "Skill",	name:"japanese","id": "81"},
    {_cssClass: "Skill",	name:"Making academic scholarship more interactive and engaging","id": "82"},
    {_cssClass: "Skill",	name:"Matcha lattes (both hot and iced)","id": "83"},
    {_cssClass: "Skill",	name:"Bullet journaling","id": "84"},
    {_cssClass: "Skill",	name:"Meanings and symbolism in studio ghibli films","id": "85"},
    {_cssClass: "Skill",	name:"video editing","id": "86"},
    {_cssClass: "Skill",	name:"technical theatre", "id": "87"},
    {_cssClass: "Skill",	name:"designing escape room games","id": "88"},
    {_cssClass: "Skill",	name:"accessibility for visual impairment","id": "89"},
    {_cssClass: "Skill",	name:"data modeling & software engineering","id": "90"},
    {_cssClass: "Skill",	name:"books","id": "91"},
    {_cssClass: "Skill",	name:"spanish","id": "92"},
    {_cssClass: "Skill",	name:"digital tools","id": "93"},
    {_cssClass: "Skill",	name:"art","id": "94"},
    {_cssClass: "Skill",	name:"Open source philosophy and history","id": "95"},
    {_cssClass: "Skill",	name:"visual facilitation techniques","id": "96"},
    {_cssClass: "Skill",	name:"German Language","id": "97"},
    {_cssClass: "Skill",	name:"programming","id": "98"},
    {_cssClass: "Skill",	name:"crafts","id": "99"},
    {_cssClass: "Skill",	name:"narrative design","id": "100"},
    {_cssClass: "Skill",	name:"copyright law","id": "101"},
    {_cssClass: "Skill",	name:"open licensing","id": "102"},
    {_cssClass: "Skill",	name:"research techniques","id": "103"},
    {_cssClass: "Skill",	name:"text editing","id": "104"},
    {_cssClass: "Skill",	name:"typography","id": "105"},
    {_cssClass: "Skill",	name:"DEI in design","id": "106"},
    {_cssClass: "Skill",	name:"illustration and animation","id": "107"},
    {_cssClass: "Skill",	name:"VR/AR","id": "108"},
    {_cssClass: "Skill",	name:"Architecture","id": "109"},
    {_cssClass: "Skill",	name:"creative writing","id": "110"},
    {_cssClass: "Skill",	name:"writing poetry","id": "111"},
    {_cssClass: "Skill",	name:"writing personal essay","id": "112"},
    {_cssClass: "Skill",	name:"writing fiction","id": "113"},
    {_cssClass: "Skill",	name:"Ceramics","id": "114"},
    {_cssClass: "Skill",	name:"textiles","id": "115"},
    {_cssClass: "Skill",	name:"woodworking","id": "116"},
    {_cssClass: "Skill",	name:"cooking", "id":"117"}
      ],
      links: [
  {
    "_cssClass": "learner",
    "sid": "12",
    "tid": "18",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "19",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "20",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "21",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "22",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "97",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "24",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "25",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "4",
    "tid": "30",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "34",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "35",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "36",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "37",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "38",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "39",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "40",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "41",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "42",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "43",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "44",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "45",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "46",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "105",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "54",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "55",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "56",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "14",
    "tid": "57",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "14",
    "tid": "58",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "16",
    "tid": "60",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "16",
    "tid": "61",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "67",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "15",
    "tid": "68",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "8",
    "tid": "70",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "8",
    "tid": "71",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "10",
    "tid": "74",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "78",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "79",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "80",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "81",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "7",
    "tid": "86",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "7",
    "tid": "87",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "4",
    "tid": "90",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "5",
    "tid": "95",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "2",
    "tid": "96",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "97",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "98",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "99",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "105",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "106",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "107",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "108",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "109",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "110",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "111",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "112",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "113",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "2",
    "tid": "26",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "2",
    "tid": "27",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "2",
    "tid": "28",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "2",
    "tid": "29",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "6",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "6",
    "tid": "32",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "6",
    "tid": "33",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "48",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "49",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "50",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "51",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "52",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "53",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "14",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "62",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "63",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "64",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "65",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "66",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "15",
    "tid": "69",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "8",
    "tid": "72",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "8",
    "tid": "73",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "10",
    "tid": "75",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "10",
    "tid": "76",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "10",
    "tid": "77",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "1",
    "tid": "82",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "1",
    "tid": "83",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "1",
    "tid": "84",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "1",
    "tid": "85",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "7",
    "tid": "88",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "7",
    "tid": "89",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "91",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "92",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "93",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "94",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "100",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "101",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "102",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "103",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "104",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "3",
    "tid": "114",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "3",
    "tid": "115",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "3",
    "tid": "116",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "3",
    "tid": "117",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "21",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "21",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "15",
    "tid": "21",
    "_svgAttrs": {
      "stroke-width": 16,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "20",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "20",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "15",
    "tid": "20",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "17",
    "tid": "56",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "3",
    "tid": "56",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "17",
    "tid": "45",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "3",
    "tid": "45",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "45",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "24",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "17",
    "tid": "41",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "95",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "13",
    "tid": "60",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "11",
    "tid": "60",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "58",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "58",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "15",
    "tid": "58",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "7",
    "tid": "58",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "57",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "57",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "15",
    "tid": "57",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "8",
    "tid": "57",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "1",
    "tid": "57",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "4",
    "tid": "21",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "9",
    "tid": "21",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "15",
    "tid": "21",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "16",
    "tid": "18",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "10",
    "tid": "18",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "sharer",
    "sid": "1",
    "tid": "18",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "16",
    "tid": "26",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "15",
    "tid": "26",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "8",
    "tid": "26",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "26",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "26",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "27",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "29",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "29",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "15",
    "tid": "29",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "29",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "29",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "16",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "15",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "8",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "10",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "7",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "4",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "31",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "32",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "16",
    "tid": "32",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "12",
    "tid": "32",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "10",
    "tid": "32",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "32",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "9",
    "tid": "33",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "16",
    "tid": "33",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "10",
    "tid": "33",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "33",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "15",
    "tid": "48",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "48",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "7",
    "tid": "48",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "48",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "49",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "8",
    "tid": "49",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "49",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "49",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "4",
    "tid": "49",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "49",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "4",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "16",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "13",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "15",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "8",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "7",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "59",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "10",
    "tid": "60",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "8",
    "tid": "67",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "67",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "10",
    "tid": "67",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "1",
    "tid": "67",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "7",
    "tid": "67",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "3",
    "tid": "67",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "17",
    "tid": "69",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "10",
    "tid": "69",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  },
  {
    "_cssClass": "learner",
    "sid": "11",
    "tid": "69",
    "_svgAttrs": {
      "stroke-width": 8,
      "opacity": 1
    }
  }
],
      nodeSize:20,
      canvas:false

    }
  },
  computed:{
    options(){
      return{
        force: 3000,
        size:{ w:800, h:600},
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
Skill node {
  fill: red;
}

Member node {
 fill: blue;
}
</style>
