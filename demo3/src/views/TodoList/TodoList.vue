<template>
  <div class="todolist-wrap">
    <Header @add="addUndoItem" />
    <UndoList :list="undoList" @delete="handleItemDelete"></UndoList>
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'
export default {
  name: 'TodoList',
  components: {
    Header, UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (val) {
      this.undoList.push(val)
    },
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
