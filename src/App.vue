<template>
  <div id="app">
    <Header ></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import store from './store/store'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  store
}
</script>

<style>
body, html, #app{
  height: 100%;
  margin:0;
}
.wrapper{
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
