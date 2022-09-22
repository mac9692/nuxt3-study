<template>
  <div>
    <h1>Layout-One 레이아웃입니다. Header</h1>
    <br>
    <slot/>
    <br>
    <h1>Layout-One 레이아웃입니다. Footer</h1>
  </div>
</template>

<script>
export default {
  name: "layout-one"
}
</script>

<style scoped>

</style>