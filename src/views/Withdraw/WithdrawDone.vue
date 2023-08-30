<template>
    <div>
        <CongratsView :title="'Unstake Suscess'"
            :desc="'You can check your account later, the correct amount。but we still have reject your unstake right'">
        </CongratsView>
    </div>
</template>
<script setup lang="ts">
import CongratsView from "@/components/CongratsView.vue"
import { BackButton } from '@twa.js/sdk';
import { useRouter } from 'vue-router'
import { inject } from "vue"
const test = inject("test");
if (!test) {
    const router = useRouter();
    const backbutton = new BackButton("6.2");
    backbutton.show();
    backbutton.on('click', () => {
        router.push("/")
    })
    backbutton.show()

}
</script>