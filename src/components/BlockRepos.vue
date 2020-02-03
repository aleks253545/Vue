<template>
      <div class="repos">
      <div class="more">
        <span class="likes">
          <span>{{repos.watchers}}</span>
          <img class="Vector" src="../assets/Vector.png" />
        </span>
        <span class="language">{{repos.language}}</span>
      </div>
      <div class="info">
        <h3 class="name">{{repos.name}}</h3>
        <span class="subname">{{repos.description}}</span>
        <div class="tags">
          <div class="tag" v-if='repos.tag'>{{repos.tag}}</div>
        </div>
      </div>
      <button  
        @click="chageLike(repos.id)"
        :class="{
          'btn_add_list':!repos.like,
          'btn_remove_list':repos.like
        }" >{{btnText}}</button>
    </div>
</template>

<script>
  export default {
    data: function() {
        return {
            btnText: 'subcribe'
        }
    },
    name: 'BlockRepos',
    props: [ 'repos' ],
    methods: {
        chageLike(id) {
        this.$store.commit('changeLike', id);
        }
    }
  }
</script>

<style scoped>
.repos{
    padding:25px 40px;
    width: 45%;
    height: 22rem;
    border:1px solid #E1E4E8;
    display: flex;
    flex-direction: column;
    margin-bottom:1rem;
    box-sizing: border-box;
}

.mark{
    width: 14px;
    height: 14px;
}

.info{
    margin: 2rem auto 0 0;
}
.name{
    margin: 0 0 10px;
    font-size: 1.8rem;
    color: blue;
    text-align: start;
}
.tags{
    display: flex;
}
.tag{
    margin-top: 1rem;
    background-color: #F1F8FE;
    border-radius: 15px;
    padding: 5px 10px;
    height: 25px;
    margin-right:1rem;
}
.subname{
    font-weight: 500;
    text-align: start;
}
.more{
    display: flex;
    
    justify-content: space-between;
}
.Vector{
    margin-left: 3px;
}
.btn_add_list,.btn_remove_list{
    width: 45%;
    height: 45px;
    background-color: blue;
    color: white;
    border:none;
    margin: auto;
    text-transform: uppercase;
    font-size: 1.1rem;
}
.btn_remove_list{
    background-color: red;
}
.btn-like{
    width: 45%;
    height: 3rem;
    color: white;
    background-color: blue;
    border: none;
    margin:auto auto 2rem;
    font-size: 1.1rem;
}
.likes{
    display: flex;
    align-items: flex-end;
}
</style>