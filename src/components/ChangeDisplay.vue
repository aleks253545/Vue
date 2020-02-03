<template >
  <div class="change_panel">
      <img src="../assets/line.png"  @click="chageDisplay('line')" />
      <img src="../assets/tile.png"  @click="chageDisplay('block')" />
    </div>
</template>

<script>
export default {
  name: 'ChangeDisplay',
  methods: {
    chageDisplay(display) {
      this.$store.commit('setDisplay',display);
    }
  }
} 
</script>
<style scoped>
.change_panel{
    display: flex;
    width: 80%;
    justify-content: flex-end;
    margin: 2rem auto 0;
}
img{
    margin-left: 30px;
}
</style>