<template>
  <div>
    <h1>typescript-test</h1>
    <h1>{{park}}</h1>
    <button @click="magic">마법의 버튼</button>
    <h1>{{sum(5,2)}}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "typescript-test",

  data: {
      park: 'This is data() TypeTest',
  },

  methods: {
    magic(): void {
      this.park = 'magic Language';
    },

    sum(a: number, b: number): number {
      return a + b;
    }
  }
}

</script>

<style scoped>

</style>