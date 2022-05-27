import axios from "axios";

// state
export const state = () => ({
  topics: [],
  members: [],
  edges: [],
  nodes: [],
});

export const getters = {
  // getTopics(state) {
  //   return [...state.topics];
  // },
  // getMembers(state) {
  //   return [...state.members];
  // },
  // getEdges(state) {
  //   return [...state.edges];
  // },
  // getNodes(state) {
  //   return [...state.nodes];
  // },
};

// async
export const actions = {
  async fetchData({ commit }) {
    // hit supabase to get topics, members and mappings
    const { data: topics, error: topicError } = await this.$supabase
      .from("topics")
      .select("*");
    const { data: members, error: memberError } = await this.$supabase
      .from("members")
      .select("*");
    const { data: mapping, error: mappingError } = await this.$supabase
      .from("members_topics")
      .select("*");

    if (!topicError) {
      commit("setTopics", topics);
    }
    if (!memberError) {
      commit("setMembers", members);
    }

    if (!topicError && !memberError && !mappingError) {
      const { edges, nodes } = createNodes(members, topics, mapping);
      commit("setEdges", edges);
      commit("setNodes", nodes);
    }
  },
};

// sync
export const mutations = {
  setTopics(state, topics) {
    state.topics = topics;
  },
  setMembers(state, members) {
    state.members = members;
  },
  setEdges(state, edges) {
    state.edges = edges;
  },
  setNodes(state, nodes) {
    state.nodes = nodes;
  },
};

function createNodes(members, topics, mappings) {
  let nodes = [];
  let memberNames = {};
  for (const member of members) {
    nodes.push({
      _cssClass: "Member",
      _labelClass: "memberLabel",
      name: member.username,
      id: `member-${member.id}`,
      submittedAd: member.created_at,
    });
    memberNames[member.id] = member.username;
  }

  for (const topic of topics) {
    nodes.push({
      _cssClass: "Skill",
      _labelClass: "skillLabel",
      name: topic.name,
      id: `topic-${topic.id}`,
      sharerNames: [],
      learnerNames: [],
    });
  }

  const edges = [];
  const counter = { learners: {}, sharers: {} };

  for (const topic of mappings.filter((item) => item.learner)) {
    edges.push({
      type: "learn",
      _color: "#f1955b",
      sid: `member-${topic.learner}`,
      tid: `topic-${topic.topic}`,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    });
    counter.learners[`topic-${topic.topic}`] = counter.learners[
      `topic-${topic.topic}`
    ] || { count: 0, names: [] };
    counter.learners[`topic-${topic.topic}`].count++;
    counter.learners[`topic-${topic.topic}`].names.push(
      memberNames[topic.learner]
    );
  }

  for (const share of mappings.filter((item) => item.sharer)) {
    edges.push({
      type: "share",
      _color: "#9f78e4",
      sid: `member-${share.sharer}`,
      tid: `topic-${share.topic}`,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    });
    counter.sharers[`topic-${share.topic}`] = counter.sharers[
      `topic-${share.topic}`
    ] || { count: 0, names: [] };
    counter.sharers[`topic-${share.topic}`].count++;
    counter.sharers[`topic-${share.topic}`].names.push(
      memberNames[share.sharer]
    );
  }

  for (const [topic, detail] of Object.entries(counter.learners)) {
    const indexToReplace = nodes.findIndex((el) => el.id === topic);
    const topicToUpdate = nodes[indexToReplace];
    topicToUpdate.learnerCount = detail.count;
    topicToUpdate.learnerNames = detail.names;
    nodes.splice(indexToReplace, 1);
    nodes.push(topicToUpdate);
  }

  for (const [topic, detail] of Object.entries(counter.sharers)) {
    const indexToReplace = nodes.findIndex((el) => el.id === topic);
    const topicToUpdate = nodes[indexToReplace];
    topicToUpdate.sharerCount = detail.count;
    topicToUpdate.sharerNames = detail.names;
    nodes.splice(indexToReplace, 1);
    nodes.push(topicToUpdate);
  }

  return { edges, nodes };
}
