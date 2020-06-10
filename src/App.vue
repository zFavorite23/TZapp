<template>
  <div id="app">
    <!-- 缓存组件 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不缓存组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 320px) {
  /* // 屏幕最小宽320px */
  html {
    font-size: 32px !important;
  }
}
</style>
