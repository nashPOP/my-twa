<template>
    <div class="px-3 pt-3">
        <div class="fs-12 text-gray">YOUR ADDRESS</div>
        <div class="fs-16 bg-lightblack5 border-radius-10 p-3 mt-3">EQBUO893...EGaqSb46tjez</div>
        <div class="fs-12 text-gray">You are connect wallet Sign In, so we Can’t change. </div>
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