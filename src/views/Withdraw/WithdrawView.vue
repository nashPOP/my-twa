<template>
    <div style="min-height: 100vh;" class="d-flex row align-content-between">
        <div class="p-3">
            <div>
                <div class="d-flex">
                    <div><img src="@/assets/icon/withdraw_icon.svg" alt=""></div>
                    <div class="text-dark fs-16 mt-2 ms-2">Withdraw</div>
                </div>
                <div class="text-start my-2">
                    <span class="text-skyblue">Your wallet :</span> {{ userAmount }} TON
                </div>
                <div class="text-start d-flex align-items-center">
                    <input :class="isStakeAmountPass ? '' : 'shake'" class="bg-white text-dark border-0 fs-54 w-100"
                        v-model="stakeAmount">
                    <div style="color: #C8C7CB66;" class="fs-36">TON</div>
                </div>
                <div class="fs-20 text-lightblack2">
                    1 TON ≈ 1.36906 USDT
                </div>
                <div class="fs-12 text-gray">
                    Notice:
                    * After you confirm "unstake", your TON will enter the "Scheduled to stake unstake" state.* After
                    completing the unstake, the system will automatically withdraw TON to your linked address (processing
                    time might be take up to 36hr).
                </div>
            </div>
        </div>
        <div class="px-3 mb-3">
            <div @click="changePageType('stakeConfirm')"
                class="bg-skyblue fs-16 w-100 text-center border-radius-10 py-2 cursor-pointer">
                UNSTAKE
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { inject } from "vue"
import WebApp from '@twa-dev/sdk'
const test = inject("test");
const userAmount = ref(1234);
const stakeAmount = ref(0);
const isStakeAmountPass = ref(true);
const pageType = ref("stakePage")
const router = useRouter();
if (!test) {
    WebApp.BackButton.show();
    if (pageType.value == "stakeConfirm") {
        WebApp.BackButton.offClick(() => { });
        WebApp.BackButton.onClick(() => {
            changePageType("stake")
        })
    } else {
        WebApp.BackButton.offClick(() => { });
        WebApp.BackButton.onClick(() => {
            router.back();
        })
    }
}
const changePageType = (val: string) => {
    if (userAmount.value < stakeAmount.value || stakeAmount.value <= 0) {
        isStakeAmountPass.value = false;
        setTimeout(() => { isStakeAmountPass.value = true }, 1000)
    } else {
        pageType.value = val;
        router.push("/withdrawDone")
    }
}
</script>
