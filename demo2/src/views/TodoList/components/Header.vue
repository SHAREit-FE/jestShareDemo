<template>
  <div class="header-wrap">
    <div class="header-content">
        TodoList
      <input  data-test='input'  v-model="inputValue"  @keyup.enter="addTodoItem"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
