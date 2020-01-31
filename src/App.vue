<template>
  <div id="app">
    <Header ></Header>
    <SearchBox/>
  </div>
</template>

<script>
import Header from './components/Header'
import SearchBox from './components/SearchBox'

export default {
  name: 'app',
  components: {
    Header,
    SearchBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
