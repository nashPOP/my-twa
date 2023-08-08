<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {BackButton } from '@twa.js/sdk';

const backbutton = new BackButton("6.2");
backbutton.hide()

</script>
<template>
  <main>
    <TheWelcome />
    <button class="btn btn-success">1234</button>
  </main>
</template>
