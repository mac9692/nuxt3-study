<template>
  <div>
    <TheHeader/>
    <MenuNavBar/>
    <p>Layout은 모든 페이지에서 공유됩니다.</p>
    <slot/>
    <p>Layout은 모든 페이지에서 공유됩니다.</p>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";
import MenuNavBar from "../components/MenuNavBar";
export default {
  name: "default",
  components: {MenuNavBar, TheFooter, TheHeader}
}
</script>

<style scoped>

</style>