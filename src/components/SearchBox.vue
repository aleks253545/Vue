<template >
<div class="wrapper">
  <SearchPanel />
  <ChangeDisplay />
  <ReposContainer />
</div>
</template>
<script>
import ChangeDisplay from './ChangeDisplay'
import SearchPanel from './SearchPanel'
import ReposContainer from './ReposContainer'
export default {
  name: 'SearchBox',
  components: {
    ChangeDisplay,
    SearchPanel,
    ReposContainer
  }
}
</script>
<style scoped>
</style>