<template>
    <div>
        <CongratsView :title="'Unstake Suscess'"
            :desc="'You can check your account later, the correct amount。but we still have reject your unstake right'">
        </CongratsView>
    </div>
</template>
<script setup lang="ts">
import CongratsView from "@/components/CongratsView.vue"
import { useRouter } from 'vue-router'
import { inject } from "vue"
import WebApp from '@twa-dev/sdk'

const test = inject("test");
if (!test) {
    const router = useRouter();
    WebApp.BackButton.show();
    WebApp.BackButton.onClick(() => {
        router.push("/")
    })
    WebApp.BackButton.show()

}
</script>