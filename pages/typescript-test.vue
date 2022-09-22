<template>
  <div>
    <h1>typescript-test</h1>
    <h1>{{typepark}}</h1>
    <button @click="magic">마법의 버튼</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "typescript-test",
  data() {
    return {
      typepark: 'This is data() TypeTest',
    }
  },


  methods: {
    magic() {
      this.typepark = 'magic Language';
    }
  }
}
</script>

<style scoped>

</style>