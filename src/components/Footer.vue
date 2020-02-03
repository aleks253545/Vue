<template >
  <footer class="footer">
    <span class="footer__text">lodossteam 2018</span>
  </footer>
</template>
<script lang="ts">
  export default ({
    name:"Footer"
  })
</script>
<style scoped>
  .footer{
    width: 100%;
    min-height: 4rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer__text{
    color: white;
  }
</style>