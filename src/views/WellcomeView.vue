<template>
    <div style="min-height: 100vh;" class="d-flex flex-column justify-content-between">
        <div class="text-center">
            <div class="pt-4">
                <svg width="82" height="73" viewBox="0 0 82 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.7126 32.5824C29.7126 32.5824 33.4806 29.4334 36.3846 32.0568C33.9539 20.5485 35.4011 8.85206 42.2288 8.77373C51.1378 8.67126 51.9488 27.0812 52.3355 35.8243C52.7219 44.5673 54.3113 63.0411 46.1659 63.3275C39.6266 63.5577 35.5484 50.9743 37.5629 45.271C34.4343 48.7052 31.4544 46.4191 30.5825 45.6077C33.2781 49.1468 32.5752 64.9921 26.4572 65.6086C16.9735 66.5644 14.2805 43.8162 14.0205 38.7374C13.7943 34.3352 11.226 9.33097 20.5745 8.47585C31.1658 7.50674 29.7126 32.5824 29.7126 32.5824Z"
                        fill="#21B5FF" />
                    <path
                        d="M29.7126 32.5824C29.7126 32.5824 33.4806 29.4334 36.3846 32.0568C33.9539 20.5485 35.4011 8.85206 42.2288 8.77373C51.1378 8.67126 51.9488 27.0812 52.3355 35.8243C52.7219 44.5673 54.3113 63.0411 46.1659 63.3275C39.6266 63.5577 35.5484 50.9743 37.5629 45.271C34.4343 48.7052 31.4544 46.4191 30.5825 45.6077C33.2781 49.1468 32.5752 64.9921 26.4572 65.6086C16.9735 66.5644 14.2805 43.8162 14.0205 38.7374C13.7943 34.3352 11.226 9.33097 20.5745 8.47585C31.1658 7.50674 29.7126 32.5824 29.7126 32.5824Z"
                        stroke="#0087EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M71.5106 18.5484C61.416 16.0527 53.2163 54.9703 64.89 56.4897C76.6867 58.0178 81.779 21.0878 71.5106 18.5484Z"
                        fill="#22B5FF" />
                    <path
                        d="M71.5106 18.5484C61.416 16.0527 53.2163 54.9703 64.89 56.4897C76.6867 58.0178 81.779 21.0878 71.5106 18.5484Z"
                        stroke="#0088ED" stroke-width="2" />
                    <path
                        d="M74.5249 1.24073C64.9483 -0.661006 62.9571 12.3258 71.9244 14.4443C78.2604 15.9379 86.6182 3.6428 74.5249 1.24073Z"
                        fill="#22B5FF" />
                    <path
                        d="M74.5249 1.24073C64.9483 -0.661006 62.9571 12.3258 71.9244 14.4443C78.2604 15.9379 86.6182 3.6428 74.5249 1.24073Z"
                        stroke="#0088ED" stroke-width="2" />
                    <path d="M66.622 26.6558C66.622 26.6558 63.2705 33.0635 62.5576 39.0045L66.622 26.6558Z"
                        fill="#22B5FF" />
                    <path d="M66.622 26.6558C66.622 26.6558 63.2705 33.0635 62.5576 39.0045" stroke="white"
                        stroke-width="2" />
                </svg>
            </div>
            <div class="text-dark fs-18">Welcome to TonStake</div>
            <div class="text-gray fs-14">Secure and Stable Way to Staking TON.</div>
        </div>
        <div class="pb-3">
            <div class="d-flex">
                <div class="col-6">
                    <div class="mx-2">
                        <router-link to="/SignIn"><button class="btn bg-lightblack3 w-100 ">Sign In</button></router-link>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mx-2">
                        <router-link to="/signUp"><button class="btn bg-lightblack3 w-100">Sign Up</button></router-link>
                    </div>
                </div>
            </div>
            <div class="mx-2 mt-3">
                <button @click="openWalletModal" class="btn bg-skyblue w-100 ">
                    Connect wallet
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { openModal } from "../utils/Utils.js"
import { useRouter } from 'vue-router'
import { inject } from "vue"
const test = inject("test");
const WebApp = inject("WebApp")
if (!test) {
    const router = useRouter();
    WebApp.BackButton.show();
    WebApp.BackButton.onClick(() => {
        router.back();
    })

}
const openWalletModal = () => {
    openModal("walletSwitchModal")
}
</script>