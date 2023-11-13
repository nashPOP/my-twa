<template>
    <div style="min-height: 100vh;" class="pt-5 flex-column justify-content-between d-flex">
        <div>
            <div>
                <Swiper :spaceBetween="30" :centeredSlides="true" :loop="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper text-dark">
                    <SwiperSlide><img src="@/assets/icon/personal/coin_and_dimons.svg">
                        <div class="fw-700 fs-16">Welcome to your account !</div>
                        <div class="fs-12 text-gray">Secure and Stable Way to Staking TON.</div>
                    </SwiperSlide>
                    <SwiperSlide><img src="@/assets/icon/personal/coin_icon.svg">
                        <div class="fw-700 fs-16">No Minimum<br> Stake any amount</div>
                    </SwiperSlide>
                    <SwiperSlide><img src="@/assets/icon/personal/36hr_icon.svg">
                        <div class="fw-700 fs-16">36 hr<br> reward frequently</div>
                    </SwiperSlide>
                    <SwiperSlide><img src="@/assets/icon/personal/hourglass.svg">
                        <div class="fw-700 fs-16">Auto Reward<br> compounding</div>
                    </SwiperSlide>
                    <SwiperSlide><img src="@/assets/icon/personal/discount.svg">
                        <div class="fw-700 fs-16">10%<br> Service fee</div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="bg-lightblack5 border-radius-10 p-3 mx-3">
                <router-link to="/personal/account_info" class="d-flex justify-content-between align-items-center">
                    <div class="text-dark"><img class="me-2" src="@/assets/icon/personal/Account_info_icon.svg"
                            alt="">Account Info</div>
                    <div><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#C8C7CB" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </router-link>
                <router-link to="/personal/email" class="d-flex text-dark justify-content-between align-items-center mt-4">
                    <div class="d-flex align-items-center">
                        <div>
                            <div><img class="me-2" src="@/assets/icon/personal/Your_Email_icon.svg" alt="">
                            </div>
                        </div>
                        <div>
                            Your Email
                            <div class="fs-14 text-gray">yft0061@gmail.com</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="me-3">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14 25C20.0751 25 25 20.0751 25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25ZM19.1826 9.91716C19.413 9.54016 19.2942 9.04777 18.9172 8.81737C18.5402 8.58698 18.0478 8.70584 17.8174 9.08284L12.8851 17.1538L10.1021 13.9732C9.81112 13.6407 9.30571 13.607 8.9732 13.8979C8.64069 14.1889 8.60699 14.6943 8.89794 15.0268L12.3979 19.0268C12.5656 19.2184 12.8144 19.3188 13.068 19.2971C13.3217 19.2755 13.5499 19.1344 13.6826 18.9172L19.1826 9.91716Z"
                                    fill="#007AFF" />
                            </svg>
                        </div>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#C8C7CB" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </router-link>
                <router-link to="/personal/address"
                    class="d-flex text-dark justify-content-between align-items-center mt-4">
                    <div class="d-flex align-items-center">
                        <div>
                            <div><img class="me-2" src="@/assets/icon/personal/Your_Address_icon.svg" alt="">
                            </div>
                        </div>
                        <div>
                            Your Address
                            <div class="fs-14 text-gray">Not connect yet</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="me-3">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14 25C20.0751 25 25 20.0751 25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25ZM19.1826 9.91716C19.413 9.54016 19.2942 9.04777 18.9172 8.81737C18.5402 8.58698 18.0478 8.70584 17.8174 9.08284L12.8851 17.1538L10.1021 13.9732C9.81112 13.6407 9.30571 13.607 8.9732 13.8979C8.64069 14.1889 8.60699 14.6943 8.89794 15.0268L12.3979 19.0268C12.5656 19.2184 12.8144 19.3188 13.068 19.2971C13.3217 19.2755 13.5499 19.1344 13.6826 18.9172L19.1826 9.91716Z"
                                    fill="#007AFF" />
                            </svg>
                        </div>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#C8C7CB" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </router-link>
                <router-link to="/personal/referral"
                    class="d-flex justify-content-between align-items-center text-dark mt-4">
                    <div><img class="me-2" src="@/assets/icon/personal/Account_info_icon.svg" alt="">Referral code</div>
                    <div><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#C8C7CB" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-3 mx-3">
            <router-link class="w-100" to="/">
                <button class="btn bg-skyblue w-100 "><svg width="40" height="32" viewBox="0 0 40 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 12.4C7 10.1598 7 9.03969 7.43597 8.18404C7.81947 7.43139 8.43139 6.81947 9.18404 6.43597C10.0397 6 11.1598 6 13.4 6H27.6C29.8402 6 30.9603 6 31.816 6.43597C32.5686 6.81947 33.1805 7.43139 33.564 8.18404C33.8979 8.8394 33.9761 9.6499 33.9944 11H27C25.1362 11 24.2044 11 23.4693 11.3045C22.4892 11.7105 21.7105 12.4892 21.3045 13.4693C21 14.2044 21 15.1362 21 17C21 18.8638 21 19.7956 21.3045 20.5307C21.7105 21.5108 22.4892 22.2895 23.4693 22.6955C24.2044 23 25.1362 23 27 23H33.9944C33.9761 24.3501 33.8979 25.1606 33.564 25.816C33.1805 26.5686 32.5686 27.1805 31.816 27.564C30.9603 28 29.8402 28 27.6 28H13.4C11.1598 28 10.0397 28 9.18404 27.564C8.43139 27.1805 7.81947 26.5686 7.43597 25.816C7 24.9603 7 23.8402 7 21.6V12.4Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M22.75 16.75C22.75 15.3499 22.75 14.6498 23.0225 14.115C23.2622 13.6446 23.6446 13.2622 24.115 13.0225C24.6498 12.75 25.3499 12.75 26.75 12.75H31.25C32.6501 12.75 33.3502 12.75 33.885 13.0225C34.3554 13.2622 34.7378 13.6446 34.9775 14.115C35.25 14.6498 35.25 15.3499 35.25 16.75V17.25C35.25 18.6501 35.25 19.3502 34.9775 19.885C34.7378 20.3554 34.3554 20.7378 33.885 20.9775C33.3502 21.25 32.6501 21.25 31.25 21.25H26.75C25.3499 21.25 24.6498 21.25 24.115 20.9775C23.6446 20.7378 23.2622 20.3554 23.0225 19.885C22.75 19.3502 22.75 18.6501 22.75 17.25V16.75ZM29 17C29 18.1046 28.1046 19 27 19C25.8954 19 25 18.1046 25 17C25 15.8954 25.8954 15 27 15C28.1046 15 29 15.8954 29 17Z"
                            fill="white" />
                    </svg>
                    View account</button>
            </router-link>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRouter } from 'vue-router'
import { inject } from "vue"
import WebApp from '@twa-dev/sdk'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Autoplay, Pagination, Navigation];
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

<style lang="scss" scope>
.swiper {
    width: 100%;
    height: 200px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
}

.swiper-pagination-bullet {
    background-color: var(--lightblack3);
    opacity: 1;

    &.swiper-pagination-bullet-active {
        background-color: var(--skyblue);
    }
}


.swiper-slide img {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;

    width: 80px;
    height: 80px;
    object-fit: cover;
}
</style>