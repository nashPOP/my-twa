<script setup >
import { echarts } from "@/utils/echarts"; // 按需引入echarts
import { provide } from 'vue';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import WalletModal from "@/components/WalletModal.vue"

provide('test', false)
provide("echarts", echarts); // 提供全局使用
onMounted(() => {
  document.documentElement.setAttribute("data-theme", "dark");

})
</script>

<template >
  <div style="min-height: 100vh;" class="bg-white p-0">
    <RouterView />
    <WalletModal></WalletModal>
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
