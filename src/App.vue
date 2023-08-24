<script setup lang="ts">
// import { echarts } from "@/utils/echarts.js"; // 按需引入echarts
import { provide } from 'vue';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
provide('test', false)
onMounted(() => {
  document.documentElement.setAttribute("data-theme", "dark");

})
</script>

<template >
  <div style="min-height: 100vh;" class="bg-white p-0">
    <RouterView />
  </div>
</template>

<style >
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

body {
  font-family: 'SF Pro Display', sans-serif;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
