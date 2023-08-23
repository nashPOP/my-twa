<template>
  <div class="text-center">
    <NoInfo></NoInfo>
  </div>
</template>

<script setup lang="ts">

import NoInfo from '@/components/NoInfo.vue';
import { BackButton } from '@twa.js/sdk';
import { useRouter } from 'vue-router'
const router = useRouter();
const backbutton = new BackButton("6.2");
backbutton.show();
backbutton.on('click', () => {
  router.back();
})
backbutton.show()

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
