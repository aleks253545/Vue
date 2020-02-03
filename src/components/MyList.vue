<template>
  <div class="wrapper">
    <ChangeDisplay />
    <MyListContainer />
  </div>
</template>
<script>
  import ChangeDisplay from './ChangeDisplay'
  import MyListContainer from './MyListContainer'
export default {
  name: 'MyList',
  components: {
    ChangeDisplay,
    MyListContainer
  }
}
</script>