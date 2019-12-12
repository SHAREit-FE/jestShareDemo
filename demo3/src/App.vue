<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './views/TodoList/TodoList'
export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
