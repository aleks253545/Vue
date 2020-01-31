<template>
      <div class="repos">
      <div class="more">
        <span class="likes">
          {props.item.watchers}
          {' '}
          <img class="Vector" />
        </span>
        <span class="language">asasasa</span>
      </div>
      <div class="info">
        <h3 class="name">sasasa</h3>
        <span class="subname">sasasas</span>
        <div class="tags">
          <div class="tag">asasa</div>
        </div>
      </div>
      <button class="like" ></button>
    </div>
</template>

<script>
export default {
  name: 'BlockRepos',
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
    margin: 2rem auto 0 2rem;
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
}
.btn_remove_list{
    background-color: red;
}
</style>