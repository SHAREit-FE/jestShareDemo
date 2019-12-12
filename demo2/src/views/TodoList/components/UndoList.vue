<template>
  <div class="undolist-wrap">
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}
        <span  data-test="delete-button" class="del-btn" @click="handelDelete(index)">-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handelDelete (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped>

</style>
