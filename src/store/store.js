import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repositories: [],
    display: 'line',
    viewIndex: 4,
    myList: []
  },
  mutations: {
    setRepositories(state,repositories) {
      state.repositories=repositories
    },
    setDisplay(state,display) {
      state.display=display;
    },
    changeLike(state,id) {
      state.repositories.map((repos) => {
        if(repos.id === id) {
          repos.like=!repos.like;
        }
      })
    }
  },
  actions: {
    downloadRepositories (context,payload) {
      fetch(`https://api.github.com/search/repositories?q=${ payload.param.tag }+language:${ payload.param.activeLanguage }`)
        .then(res=>res.json())
        .then(data=>{
          let repos=data.items.map(item=>{
              return {
                id:item.id,
                name:item.name,
                watchers:item.watchers,
                language:item.language,
                description:item.description,
                like:false,
                tag:payload.param.tag
            }
          });
          context.commit('setRepositories',repos);
        })
  }
}
})