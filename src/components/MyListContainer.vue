<template > 
  <div class="block_found" v-if="!repositories.length">
        <h2 class="title_found">No Result found</h2>
        <span class="fext_found">select other parameters and try again</span>
  </div>
  <div class="repos_container" v-else-if="display==='line'">
    <LineRepos   v-for='repos in myList' v-bind:key='repos.id' :repos='repos'/>
  </div>
  <div class="repos_container" v-else-if="display==='block'">
    <BlockRepos   v-for='repos in myList' v-bind:key='repos.id' :repos='repos'/>
  </div>
</template>

<script>
import LineRepos from './LineRepos'
import BlockRepos from './BlockRepos'
export default {
  name: 'MyListContainer',
  components: {
      LineRepos,
      BlockRepos
  },
  computed: {
    display() {
      return this.$store.state.display
    },
    myList() {
      return this.$store.state.myList
    },
    viewIndex() {
      return this.$store.state.viewIndex
    }
  }
}
</script>
<style scoped>
.repos_container{
    margin: 2rem auto 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.btn_more{
    width: 200px;
    height: 50px;
    margin: 1rem auto;
    background-color: rgb(67, 67, 185);
    color:white;
    text-transform: uppercase;
    border:none;
    box-shadow: 1px 1px 1px gray;
}
.block_found{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title_found{
    color:blue;
    text-transform: uppercase;
    font-size: 2.8rem;
    margin-bottom: 0;
}
.fext_found{
    font-size: 1.7rem;
    font-weight: 600;
}
</style>