<template>
  <div class="repos">
      <input :id="repos.id" class="checkbox" type="checkbox"  v-model="repos.like" @click="chageLike(repos.id)"/>
      <label class="label" :for="repos.id" ><div class="mark" /></label>
      <div class="info">
        <h3 class="name">{{repos.name}}</h3>
        <span class="subname">{{repos.description}}</span>
        <div class="tags" >
            <div class="tag" v-if='repos.language'>{{repos.language}}</div>
          <div class="tag" v-if='repos.tag'>{{repos.tag}}</div>
        </div>
      </div>
      <div class="more">
        <span class="likes">
          <span>{{repos.watchers}}</span>
          <img src="../assets/Vector.png" class="Vector"/>
        </span>
        <span class="language" >{{repos.language}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LineRepos',
    props: ['repos'],
    methods: {
        chageLike(id){
            this.$store.commit('changeLike',id);
        }
    }
}
</script>
<style scoped>
.repos{
    padding-top:20px;
    border-top:1px solid #E1E4E8;
    display: flex;
    justify-content: space-between;
    margin-bottom:1rem;
    width: 100%;
}
.checkbox{
    display: none;
}
form{
    width: 30px;
}
.label{
    width: 20px;
    height: 20px;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10px;
}
.mark{
    width: 14px;
    height: 14px;
}

input:checked + .label>.mark{
    background-color: blue;
}
.info{
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto 0 2rem;
}
.name{
    margin: 0 auto 0 0;
    font-size: 1.8rem;
    color: blue;
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
    flex-direction: column;
    justify-content: space-between;
}
.Vector{
    margin-left: 3px;
}
.likes{
    display: flex;
    align-items: flex-end;
}
</style>