<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import {BackButton } from '@twa.js/sdk';
import {useRouter} from 'vue-router'
const router = useRouter();
const backbutton = new BackButton("6.2");
// console.log(backbutton);
// backbutton.show();
backbutton.on('click',()=>{
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
