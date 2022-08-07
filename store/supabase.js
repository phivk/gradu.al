import { createNodesEdgesForVueD3Network } from "../util/d3utils";

// state
export const state = () => ({
  topics: [],
  members: [],
  edges: [],
  nodes: [],
});

const COMMUNITY_NAME = process.env.COMMUNITY_NAME;

export const actions = {
  async fetchData({ commit }) {
    // hit supabase to get topics, members and mappings
    const { data: topics, error: topicError } = await this.$supabase
      .from(`${COMMUNITY_NAME}_topics`)
      .select("*");
    const { data: members, error: memberError } = await this.$supabase
      .from(`${COMMUNITY_NAME}_members`)
      .select("*");
    const { data: members_topics, error: mappingError } = await this.$supabase
      .from(`${COMMUNITY_NAME}_members_topics`)
      .select("*");

    if (!topicError) {
      commit("setTopics", topics);
    }
    if (!memberError) {
      commit("setMembers", members);
    }

    if (!topicError && !memberError && !mappingError) {
      const { edges, nodes } = createNodesEdgesForVueD3Network(
        members,
        topics,
        members_topics
      );
      commit("setEdges", edges);
      commit("setNodes", nodes);
    }
  },
};

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
