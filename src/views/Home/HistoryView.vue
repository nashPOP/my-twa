<template>
    <div>
        <div class="fs-18 text-gray ms-3 pt-3">YOUR STAKE</div>
        <div style="padding-bottom: 60px;">
            <div v-for="index in 10" :key="index" style="border-bottom: 1px solid #ffffff13;"
                class="d-flex justify-content-between align-items-center my-4 mx-3  ">
                <div class="d-flex align-items-center pb-2">
                    <div style="width: 36px; height: 36px;"
                        class="d-flex align-items-center rounded-circle bg-lightblack5 p-1 me-2">
                        <svg class="mx-2" width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L17.2071 7.79289C17.5976 8.18342 17.5976 8.81658 17.2071 9.20711C16.8166 9.59763 16.1834 9.59763 15.7929 9.20711L10 3.41421V19C10 19.5523 9.55229 20 9 20C8.44772 20 8 19.5523 8 19V3.41421L2.20711 9.20711C1.81658 9.59763 1.18342 9.59763 0.792893 9.20711C0.402369 8.81658 0.402369 8.18342 0.792893 7.79289L8.29289 0.292893Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div>Staked</div>
                </div>
                <div class="d-flex">
                    <div>25.759</div>
                    <img class="ms-2" src="@/assets/icon/toncoin_icon.svg" alt="">
                </div>
            </div>
        </div>
        <div style="border-top:1px solid #ffffff13; position: fixed;bottom: 0;"
            class="w-100 justify-content-between bg-light pt-2">
            <div class="d-flex  justify-content-around">
                <div class="text-center">
                    <img class="text-center" src="@/assets/icon/clock_icon.svg">
                    <div class="text-gray">All</div>
                </div>
                <div class="text-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM14.4343 11.0657C14.7467 11.3781 15.2533 11.3781 15.5657 11.0657C15.8781 10.7533 15.8781 10.2467 15.5657 9.93431L11.5657 5.93431C11.2533 5.6219 10.7467 5.6219 10.4343 5.93431L6.43431 9.93431C6.12189 10.2467 6.12189 10.7533 6.43431 11.0657C6.74673 11.3781 7.25327 11.3781 7.56569 11.0657L10.2 8.43137V16C10.2 16.4418 10.5582 16.8 11 16.8C11.4418 16.8 11.8 16.4418 11.8 16V8.43137L14.4343 11.0657Z"
                            fill="white" />
                    </svg>

                    <div class="text-gray">Stake</div>
                </div>
                <div class="text-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM7.56569 11.4343C7.25327 11.1219 6.74673 11.1219 6.43431 11.4343C6.1219 11.7467 6.1219 12.2533 6.43431 12.5657L10.4343 16.5657C10.7467 16.8781 11.2533 16.8781 11.5657 16.5657L15.5657 12.5657C15.8781 12.2533 15.8781 11.7467 15.5657 11.4343C15.2533 11.1219 14.7467 11.1219 14.4343 11.4343L11.8 14.0686V6.5C11.8 6.05817 11.4418 5.7 11 5.7C10.5582 5.7 10.2 6.05817 10.2 6.5V14.0686L7.56569 11.4343Z"
                            fill="#007AFF" />
                    </svg>
                    <div class="text-gray">Unstake</div>
                </div>
                <div class="text-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.426 10.0577C6.41793 10.0408 6.41183 10.0269 6.40724 10.0158C6.41914 10.014 6.43417 10.0122 6.45282 10.0105C6.56152 10.0005 6.71396 10 6.96348 10H8V12.7225L6.67819 10.5018C6.55057 10.2874 6.47303 10.1562 6.426 10.0577Z"
                            fill="white" />
                        <path
                            d="M9 12.7225V10H10.0365C10.286 10 10.4385 10.0005 10.5472 10.0105C10.5658 10.0122 10.5809 10.014 10.5928 10.0158C10.5882 10.0269 10.5821 10.0408 10.574 10.0577C10.527 10.1562 10.4494 10.2874 10.3218 10.5018L9 12.7225Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V22H3.03125L4.83141 20.1998L6.63156 22H6.69434L8.49449 20.1998L10.2946 22H10.3564L12.1566 20.1998L13.9568 22H14.0195L15.8197 20.1998L17.6198 22H17.6826L19.4828 20.1998L21.2829 22H21.3457L23.1459 20.1998L24.946 22H25V10.8C25 9.11984 25 8.27976 24.673 7.63803C24.3854 7.07354 23.9265 6.6146 23.362 6.32698C22.7202 6 21.8802 6 20.2 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803ZM14 9.7C13.5582 9.7 13.2 10.0582 13.2 10.5C13.2 10.9418 13.5582 11.3 14 11.3H21C21.4418 11.3 21.8 10.9418 21.8 10.5C21.8 10.0582 21.4418 9.7 21 9.7H14ZM13.2 13.5C13.2 13.0582 13.5582 12.7 14 12.7H18C18.4418 12.7 18.8 13.0582 18.8 13.5C18.8 13.9418 18.4418 14.3 18 14.3H14C13.5582 14.3 13.2 13.9418 13.2 13.5ZM6.94204 9C6.72084 8.99998 6.52155 8.99997 6.36146 9.01466C6.19928 9.02954 5.99269 9.0647 5.81184 9.1972C5.57713 9.36917 5.42703 9.63319 5.39931 9.92284C5.37795 10.146 5.45341 10.3415 5.52357 10.4885C5.59283 10.6336 5.69478 10.8048 5.80793 10.9949L8.07035 14.7957C8.16051 14.9472 8.32374 15.04 8.5 15.04C8.67626 15.04 8.83949 14.9472 8.92965 14.7957L11.1921 10.9949C11.3052 10.8048 11.4072 10.6336 11.4764 10.4885C11.5466 10.3415 11.622 10.146 11.6007 9.92284C11.573 9.63319 11.4229 9.36917 11.1882 9.1972C11.0073 9.0647 10.8007 9.02954 10.6385 9.01466C10.4785 8.99997 10.2792 8.99998 10.058 9H6.94204Z"
                            fill="white" />
                    </svg>
                    <div class="text-gray">Reward</div>
                </div>
                <div class="text-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 12C4 9.19974 4 7.79961 4.54497 6.73005C5.02433 5.78924 5.78924 5.02433 6.73005 4.54497C7.79961 4 9.19974 4 12 4H13.2V9.73121C13.0281 9.44141 12.8308 9.17123 12.6008 8.94141C12.0095 8.35045 11.1739 7.82159 10.2593 7.62808C9.31292 7.42783 8.25159 7.58929 7.399 8.44177C6.96075 8.87997 6.71519 9.40158 6.66161 9.96206C6.6095 10.5071 6.74392 11.0297 6.96016 11.4887C7.26074 12.1268 7.75199 12.7141 8.30839 13.2H4V12Z"
                            fill="white" />
                        <path
                            d="M4 14.8V16C4 18.8003 4 20.2004 4.54497 21.27C5.02433 22.2108 5.78924 22.9757 6.73005 23.455C7.79961 24 9.19974 24 12 24H13.2V16.9535C11.8447 18.7187 10.1759 19.9316 8.1667 20.3335C7.70637 20.4256 7.25857 20.127 7.16651 19.6667C7.07444 19.2064 7.37298 18.7586 7.8333 18.6665C9.6694 18.2993 11.2776 16.9979 12.6084 14.8096C12.5792 14.8065 12.5498 14.8033 12.5201 14.8H4Z"
                            fill="white" />
                        <path
                            d="M15.4799 14.8C15.4502 14.8033 15.4208 14.8065 15.3916 14.8096C16.7224 16.9979 18.3306 18.2993 20.1667 18.6665C20.627 18.7586 20.9256 19.2064 20.8335 19.6667C20.7414 20.127 20.2936 20.4256 19.8333 20.3335C17.8241 19.9316 16.1553 18.7187 14.8 16.9535V24H16C18.8003 24 20.2004 24 21.27 23.455C22.2108 22.9757 22.9757 22.2108 23.455 21.27C24 20.2004 24 18.8003 24 16V14.8H15.4799Z"
                            fill="white" />
                        <path
                            d="M24 13.2V12C24 9.19974 24 7.79961 23.455 6.73005C22.9757 5.78924 22.2108 5.02433 21.27 4.54497C20.2004 4 18.8003 4 16 4H14.8V9.73121C14.9719 9.44141 15.1692 9.17123 15.3992 8.94141C15.9905 8.35045 16.8261 7.82159 17.7407 7.62808C18.6871 7.42783 19.7484 7.58929 20.601 8.44177C21.0393 8.87997 21.2848 9.40158 21.3384 9.96206C21.3905 10.5071 21.2561 11.0297 21.0398 11.4887C20.7393 12.1268 20.248 12.7141 19.6916 13.2H24Z"
                            fill="white" />
                        <path
                            d="M18.0926 9.29126C17.5627 9.40337 17.0095 9.73552 16.6008 10.1439C16.2542 10.4903 15.9671 11.1158 15.6694 11.9644C15.601 12.1594 15.5312 12.3693 15.4593 12.5857C15.4021 12.7581 15.3433 12.9351 15.2828 13.1114C15.3776 13.101 15.4753 13.0891 15.5752 13.0758C16.4954 12.9532 17.4516 12.7208 18.0285 12.3362C18.6943 11.8923 19.2471 11.3052 19.5019 10.7642C19.626 10.5009 19.6617 10.2872 19.6461 10.1238C19.632 9.97586 19.5719 9.81684 19.399 9.64393C19.0292 9.2742 18.5906 9.18589 18.0926 9.29126Z"
                            fill="white" />
                        <path
                            d="M11.3992 10.1439C10.9905 9.73552 10.4373 9.40337 9.90744 9.29126C9.40945 9.18589 8.97078 9.2742 8.601 9.64393C8.42807 9.81684 8.36804 9.97586 8.35389 10.1238C8.33828 10.2872 8.37401 10.5009 8.49806 10.7642C8.75287 11.3052 9.30569 11.8923 9.9715 12.3362C10.5484 12.7208 11.5046 12.9532 12.4248 13.0758C12.5247 13.0891 12.6224 13.101 12.7172 13.1114C12.6567 12.9351 12.5981 12.7586 12.5408 12.5862C12.4689 12.3698 12.399 12.1594 12.3306 11.9644C12.0329 11.1158 11.7458 10.4903 11.3992 10.1439Z"
                            fill="white" />
                    </svg>
                    <div class="text-gray">Referral</div>
                </div>
            </div>
        </div>
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
