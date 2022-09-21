<template>
<!--  <div>-->
<!--    <NuxtWelcome />-->
<!--  </div>-->


<!--  <NuxtLayout>-->
<!--    페이지 컨텐츠-->
<!--  </NuxtLayout>-->

  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
const layout = "layout-one";
</script>
