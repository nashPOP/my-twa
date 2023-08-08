<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
// import WebApp from "@twa-dev/sdk";

import {BackButton} from '@twa.js/sdk';

// init().then(components => {
//   const { mainButton, viewport } = components;

//   mainButton.on('click', () => viewport.expand());

//   mainButton
//     .setBackgroundColor('#ff0000')
//     .setTextColor('#ffffff')
//     .setText('Expand')
//     .enable()
//     .show();
// });

const backbutton = new BackButton("6.2");
console.log(new BackButton("6.2"));
backbutton.show();

</script>
<template>
  <main>
    <TheWelcome />
    <button class="button button-success">1234</button>
  </main>
</template>
