<template>
  <div>
    <h1>기본 페이지 "index"</h1>
    <h2>const 변수 {{version}}</h2>
    <h2>composables 디렉토리 학습 : {{foo}}</h2>
    <h2>typeScript 변수 학습 : {{num}}</h2>
  </div>
</template>

<script setup lang="ts">
import {useFoo} from "../composables/practice-one";

const version = 10;
const foo = useFoo();
let num: number = 10;
</script>

<script lang="ts">
export default {
  name: "index"
}
</script>

<style scoped>

</style>