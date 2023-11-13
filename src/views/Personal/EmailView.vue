<template>
    <div class="px-2 pt-3">
        <div class="fs-12 text-gray">Your email</div>
        <div class="fs-16 bg-lightblack5 border-radius-10 p-3 mt-3">yft0061@0061@gmail.com</div>
        <div class="fs-12 text-gray">Can't change.</div>
    </div>
</template>

<script setup lang="ts">

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
</script >