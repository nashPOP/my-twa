<template>
    <div class="px-3 pt-3">
        <div class="fs-12 text-gray">Sign UP DATE</div>
        <div class="fs-16 bg-lightblack5 border-radius-10 p-3 mt-3">June 4 ,2023</div>
        <div class="fs-16 bg-lightblack5 border-radius-10 p-3 mt-3">
            <div class="border-bottom mb-2">Withdraw all you stake</div>
            <div class="mt-2">Delete acoount</div>
        </div>
        <div class="fs-16 bg-lightblack5 border-radius-10 p-3 mt-3">Sign Out</div>
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
