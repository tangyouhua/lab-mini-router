<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img src="/vite.svg" class="logo" alt="Vite logo" />

  <p>
    <!-- 使用router-link导航 -->
    <router-link to="/">Go to Home | </router-link>
    <router-link to="/about">Go to About</router-link>
  </p>

  <!-- 路由出口 -->
  <!-- 将来路由匹配的组件会渲染在这里 -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
