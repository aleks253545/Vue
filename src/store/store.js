import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repositories: [],
    display: 'line',
    viewIndex: 4,
    myList: [],
  },
  mutations: {
    setRepositories(state, repositories) {
      state.repositories = repositories;
    },
    setDisplay(state, display) {
      state.display = display;
    },
    changeLike(state, id) {
      state.repositories.map((repos) => {
        if (repos.id === id) {
          repos.like = !repos.like;
          if (repos.like) {
            state.myList.push(repos);
          } else {
            state.myList.forEach((item, index) => {
              if (id === item.id) {
                state.myList.splice(index, 1);
              }
            });
          }
        }
      });
      state.myList.forEach((item, index) => {
        if (item.id === id && !state.repositories.includes(item)) {
          state.myList.splice(index, 1);
        }
      });
    },
  },
  actions: {
    downloadRepositories(context, payload) {
      fetch(`https://api.github.com/search/repositories?q=${payload.param.tag}+language:${payload.param.activeLanguage}`)
        .then((res) => res.json())
        .then((data) => {
          const repositories = data.items.map((repos) => {
            let like = false;
            context.state.myList.forEach((iterRepos) => {
              if (iterRepos.id === repos.id) {
                like = true;
              }
            });
            return {
              id: repos.id,
              name: repos.name,
              watchers: repos.watchers,
              language: repos.language,
              description: repos.description,
              like,
              tag: payload.param.tag,
            };
          });
          context.commit('setRepositories', repositories);
        });
    },
  },
});
