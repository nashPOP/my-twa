<template>
    <div v-if="pageType === 'stakePage'" style="min-height: 100vh;" class="d-flex row align-content-between">
        <div class="p-3">
            <div>
                <div class="d-flex">
                    <div><img src="@/assets/icon/deposit_icon.svg" alt=""></div>
                    <div class="text-dark fs-16 mt-2 ms-2">Deposit</div>
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
            </div>
        </div>
        <div class="px-3 mb-3">
            <div @click="changePageType('stakeConfirm')"
                class="bg-skyblue fs-16 w-100 text-center border-radius-10 py-2 cursor-pointer">
                STAKE
            </div>
        </div>
    </div>
    <div v-else style="min-height: 100vh;" class="d-flex row align-content-between">
        <div class="p-3">
            <div>
                <div class="text-dark fs-16 mt-2 ">YOUR STAKE</div>
                <div class="text-start d-flex align-items-center justify-content-between fs-16 mt-3">
                    <div>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L17.2071 7.79289C17.5976 8.18342 17.5976 8.81658 17.2071 9.20711C16.8166 9.59763 16.1834 9.59763 15.7929 9.20711L10 3.41421V19C10 19.5523 9.55229 20 9 20C8.44772 20 8 19.5523 8 19V3.41421L2.20711 9.20711C1.81658 9.59763 1.18342 9.59763 0.792893 9.20711C0.402369 8.81658 0.402369 8.18342 0.792893 7.79289L8.29289 0.292893Z"
                                fill="white" />
                        </svg>
                        <span class="ms-2">Deposit</span>
                    </div>
                    <div>{{ stakeAmount }}<img class="ms-2" src="@/assets/icon/toncoin_icon.svg"></div>
                </div>
                <div class="text-start d-flex align-items-center justify-content-between fs-16 mt-3">
                    <div>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.642 0.284654C10.8672 0.172043 11.1323 0.172043 11.3576 0.284654L21.3576 5.28465C21.6894 5.45058 21.8636 5.8229 21.7784 6.184C21.6931 6.54509 21.3708 6.8002 20.9998 6.8002H10.9998H0.999785C0.628763 6.8002 0.306429 6.54509 0.221186 6.184C0.135943 5.8229 0.310162 5.45058 0.642014 5.28465L10.642 0.284654ZM4.38864 5.2002H10.9998H17.6109L10.9998 1.89462L4.38864 5.2002ZM0.199785 22.0002C0.199785 21.5584 0.557957 21.2002 0.999785 21.2002H20.9998C21.4416 21.2002 21.7998 21.5584 21.7998 22.0002C21.7998 22.442 21.4416 22.8002 20.9998 22.8002H0.999785C0.557957 22.8002 0.199785 22.442 0.199785 22.0002ZM1.69876 9.05097C1.69876 8.60915 2.05693 8.25097 2.49876 8.25097H3.49876H4.49876C4.94059 8.25097 5.29876 8.60915 5.29876 9.05097C5.29876 9.4928 4.94059 9.85097 4.49876 9.85097H4.29876V18.251H4.49876C4.94059 18.251 5.29876 18.6091 5.29876 19.051C5.29876 19.4928 4.94059 19.851 4.49876 19.851H3.49876H2.49876C2.05693 19.851 1.69876 19.4928 1.69876 19.051C1.69876 18.6091 2.05693 18.251 2.49876 18.251H2.69876V9.85097H2.49876C2.05693 9.85097 1.69876 9.4928 1.69876 9.05097ZM6.69876 9.05097C6.69876 8.60915 7.05693 8.25097 7.49876 8.25097H8.49876H9.49876C9.94059 8.25097 10.2988 8.60915 10.2988 9.05097C10.2988 9.4928 9.94059 9.85097 9.49876 9.85097H9.29876V18.251H9.49876C9.94059 18.251 10.2988 18.6091 10.2988 19.051C10.2988 19.4928 9.94059 19.851 9.49876 19.851H8.49876H7.49876C7.05693 19.851 6.69876 19.4928 6.69876 19.051C6.69876 18.6091 7.05693 18.251 7.49876 18.251H7.69876V9.85097H7.49876C7.05693 9.85097 6.69876 9.4928 6.69876 9.05097ZM12.4988 8.25097C12.0569 8.25097 11.6988 8.60915 11.6988 9.05097C11.6988 9.4928 12.0569 9.85097 12.4988 9.85097H12.6988V18.251H12.4988C12.0569 18.251 11.6988 18.6091 11.6988 19.051C11.6988 19.4928 12.0569 19.851 12.4988 19.851H13.4988H14.4988C14.9406 19.851 15.2988 19.4928 15.2988 19.051C15.2988 18.6091 14.9406 18.251 14.4988 18.251H14.2988V9.85097H14.4988C14.9406 9.85097 15.2988 9.4928 15.2988 9.05097C15.2988 8.60915 14.9406 8.25097 14.4988 8.25097H13.4988H12.4988ZM16.6988 9.05097C16.6988 8.60915 17.0569 8.25097 17.4988 8.25097H18.4988H19.4988C19.9406 8.25097 20.2988 8.60915 20.2988 9.05097C20.2988 9.4928 19.9406 9.85097 19.4988 9.85097H19.2988V18.251H19.4988C19.9406 18.251 20.2988 18.6091 20.2988 19.051C20.2988 19.4928 19.9406 19.851 19.4988 19.851H18.4988H17.4988C17.0569 19.851 16.6988 19.4928 16.6988 19.051C16.6988 18.6091 17.0569 18.251 17.4988 18.251H17.6988V9.85097H17.4988C17.0569 9.85097 16.6988 9.4928 16.6988 9.05097Z"
                                fill="white" />
                        </svg>
                        <span class="ms-2">Fee</span>
                    </div>
                    <div>{{ stakeAmount }}<img class="ms-2" src="@/assets/icon/toncoin_icon.svg"></div>
                </div>
                <div class="mt-1 text-gray">
                    Your stakeAmount need to get though Scheduled to stake, and start stake Our fee is from.
                </div>
            </div>
        </div>
        <div class="mb-3">
            <div class="d-flex">
                <div class="col-6">
                    <div class="mx-2">
                        <router-link to="/SignIn"><button class="btn bg-lightblack3 w-100 ">QRCode</button></router-link>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mx-2">
                        <router-link to="/SignIn"><button class="btn bg-lightblack3 w-100">
                                Manual Verify</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="mx-2 mt-3">
                <button class="btn bg-skyblue w-100 ">
                    Open TON Wallet
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { BackButton } from '@twa.js/sdk';
import { useRouter } from 'vue-router'
import { inject } from "vue"
const test = inject("test");
const userAmount = ref(1234);
const stakeAmount = ref(0);
const isStakeAmountPass = ref(true);
const pageType = ref("stakePage")
const router = useRouter();
const backbutton = new BackButton("6.2");
if (!test) {
    backbutton.show();
    if (pageType.value == "stakeConfirm") {
        backbutton.off("click", () => { });
        backbutton.on('click', () => {
            alert("123");
            changePageType("stake")
        })
    } else {
        backbutton.off("click", () => { });
        backbutton.on('click', () => {
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

    }
}
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
