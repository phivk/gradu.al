// holds your root state
export const state = () => ({
  counter: 0,
});

// contains your actions
export const actions = {
  counterUp({ state, commit }) {
    commit("setCounter", state.counter + 1);
  },
};
// contains your mutations
export const mutations = {
  setCounter(state, value) {
    state.counter = value;
  },
};
// your root getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000;
  },
};
