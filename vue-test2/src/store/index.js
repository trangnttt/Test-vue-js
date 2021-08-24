import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meals: [],
  },
  mutations: {
    ADD_MEAL: (state, meal) => {
      state.meals.push(meal);
    },
    UPDATE_MEAL: (state, meal) => {
      const index = state.meals.findIndex(function (o) {
        return o.name === meal.name;
      });
      if (index !== -1) {
        state.meals.splice(index, 1);
      }
      state.meals.push(meal);
    },
    DELETE_MEAL: (state, name) => {
      const index = state.meals.findIndex(function (o) {
        return o.name === name;
      });
      if (index !== -1) state.meals.splice(index, 1);
    },
  },
  actions: {
    addMeal({ commit }, meals) {
      commit("ADD_MEAL", meals);
    },
    updateMeal({ commit }, meals) {
      commit("UPDATE_MEAL", meals);
    },
    deleteMeal({ commit }, name) {
      commit("DELETE_MEAL", name);
    },
  },
  modules: {},
});
