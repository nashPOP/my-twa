<template>
    <div class="px-2 pt-3">
        <div class="fs-12 text-gray">Your email</div>
        <div class="fs-16 bg-lightblack5 border-radius-10 p-3 mt-3">yft0061@0061@gmail.com</div>
        <div class="fs-12 text-gray">Can't change.</div>
    </div>
</template>

<script setup lang="ts">
import { BackButton } from '@twa.js/sdk';
import { useRouter } from 'vue-router'
import { inject } from "vue"

const test = inject("test");
if (!test) {

    const router = useRouter();
    const backbutton = new BackButton("6.2");

    backbutton.show();
    backbutton.on('click', () => {
        router.back();
    })
    backbutton.show()
}
</script >