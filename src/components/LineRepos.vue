<template>
  <div class="repos">
      <input id="rops.item.id" class="checkbox" type="checkbox"/>
      <label class="label"><div class="mark" /></label>
      <div class="info">
        <h3 class="name">sasas</h3>
        <span class="subname">dsdsd</span>
        <div class="tags">
          <div class="tag">aaaaaa</div>
          {tag}
        </div>
      </div>
      <div class="more">
        <span class="likes">
          dsdsds
          {' '}
          <img src={Vector} class="Vector"/>
        </span>
        <span class="language" >dsds</span>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LineRepos'
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
    margin: 0 auto 0 2rem;
}
.name{
    margin: 0;
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
}
.more{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.Vector{
    margin-left: 3px;
}
</style>