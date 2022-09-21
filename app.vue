<template>
  <div>
    <NuxtLayout :name="layoutName">
      slot 을 임의의 문장으로 채워봅시다.
    </NuxtLayout>
  </div>
</template>

<script setup>
const layoutName = "layout-one"
</script>