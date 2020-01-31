<template >
  <header class="header_page">
    <img src={logo} class="header_logo"/>
    <ul class="header_list">
      <li class="header_list_item">Search</li>
      <li class="header_list_item">My list</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>
<style scoped>
.header_page{
    width: 100%;
    background-color: #3C4146;
    align-items: center;
    display: flex;
}
.header_list{
    color: rgba(255, 255, 255, 0.582);
    width: 150px;
    justify-content: space-between;
    display: flex;
    margin-left: auto;
    margin-right: 3rem;
    list-style: none;
    font-size: 1.3rem;
}
.header_logo{
    margin:  20px auto 20px 2rem;
}
.header_list_item{
    color: white;
}
a:active{
    border: none;
}
</style>