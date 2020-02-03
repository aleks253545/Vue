<template >
  <div class="search_panel">
      <select class="search_panel_select">
        <option value="grapefruit">Repositories</option>
      </select>
      <select class="search_panel_select" v-model="activeLanguage">
        <option value="JavaScript" >JavaScript</option>
        <option value="css">css</option>
        <option value="Html">Html</option>
        <option value="php">php</option>
        <option value="ruby">ruby</option>
        <option value="c++">c++</option>
        <option value="c#">c#</option>
        <option value="python">python</option>
        <option value="java">java</option>
        <option value="go">go</option>
        <option value="haskel">haskel</option>
      </select>
      <input type="text" class="search_panel_input" v-model="tag"/>
      <button class="search_panel_button" @click="downloadRepos({tag, activeLanguage})" >Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tag: '',
            activeLanguage: 'JavaScript'
        }
    },
    methods: {
        downloadRepos(param){
            this.$store.dispatch({
                type:'downloadRepositories',
                param
            })
        }
    }
}
</script>
<style scoped>
.search_panel{
    width: 80%;
    margin: 2rem auto 0;
    display: flex;
    justify-content: space-between;
}
.search_panel_select{
    width: 20%;
    border:none;
    border-bottom: 1.2px solid blue;
    font-size: 1.1rem;
}
.search_panel_select:focus{
    outline: none;
}
.search_panel_input{
    border:none;
    border-bottom: 1.2px solid blue;
    font-size: 1.1rem;
}
.search_panel_input:focus{
    outline: none;
    border-bottom: 2px solid blue;
}
.search_panel_button{
    color: white;
    text-transform: uppercase;
    width: 120px;
    height: 35px;
    background-color: blue;
    border: none;
    font-size: 1.2rem;
}
</style>