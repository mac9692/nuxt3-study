<template>
  <div>
    <NuxtLayout :name="layoutName">
      <typescript-test/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import TypescriptTest from "./pages/typescript-test";

const layoutName = "layout-one"
</script>