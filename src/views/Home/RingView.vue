<template>
  <div class="text-center">
    <NoInfo></NoInfo>
  </div>
</template>

<script setup lang="ts">

import NoInfo from '@/components/NoInfo.vue';
import { useRouter } from 'vue-router'
import { inject } from "vue"
import WebApp from '@twa-dev/sdk'

const test = inject("test");
if (!test) {
  const router = useRouter();
  WebApp.BackButton.show();
  WebApp.BackButton.onClick(() => {
    router.back();
  })
  WebApp.BackButton.show()

}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
