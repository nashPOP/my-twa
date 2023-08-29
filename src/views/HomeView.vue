<script setup lang="ts">

import { BackButton } from '@twa.js/sdk';
import { inject } from "vue"
const test = inject("test");
if (!test) {

  const backbutton = new BackButton("6.2");
  backbutton.hide()
}
</script>
<template>
  <div class="text-center py-3">
    <router-link style="position: absolute;right: 10px; top: 10px;" to="/ring">
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8.50002 1.5C8.50002 0.671573 9.17159 0 10 0C10.8284 0 11.5 0.671573 11.5 1.5V1.88504C13.4553 2.25371 14.8376 3.34181 15.7491 4.70897C16.853 6.36489 17.25 8.39686 17.25 10L17.25 15.6893L19.0304 17.4697C19.2449 17.6842 19.309 18.0068 19.1929 18.287C19.0768 18.5673 18.8034 18.75 18.5 18.75H1.50002C1.19668 18.75 0.923198 18.5673 0.807112 18.287C0.691027 18.0068 0.755193 17.6842 0.969692 17.4697L2.75002 15.6893L2.75002 10C2.75002 8.39686 3.14704 6.36489 4.25098 4.70897C5.16243 3.3418 6.54474 2.25371 8.50002 1.88504V1.5ZM5.49906 5.54103C4.603 6.88511 4.25002 8.60314 4.25002 10V15.6702L4.2501 15.6956C4.25053 15.7863 4.25123 15.9358 4.21548 16.0847C4.18486 16.2122 4.13436 16.3342 4.06582 16.446C3.98579 16.5766 3.87905 16.6824 3.81427 16.7465L3.79604 16.7646L3.31068 17.25H16.6894L16.204 16.7646L16.1858 16.7465C16.121 16.6824 16.0143 16.5766 15.9342 16.446C15.8657 16.3342 15.8152 16.2122 15.7846 16.0847C15.7488 15.9358 15.7495 15.7863 15.7499 15.6956L15.75 15.6702V10C15.75 8.60314 15.397 6.88511 14.501 5.54103C13.6301 4.23464 12.2317 3.25 10 3.25C7.76833 3.25 6.36998 4.23464 5.49906 5.54103Z"
          fill="#007AFF" />
        <path d="M10.0002 22C8.694 22 7.58276 21.1652 7.17092 20H12.8295C12.4177 21.1652 11.3064 22 10.0002 22Z"
          fill="#007AFF" />
      </svg>
    </router-link>
    <svg width="77" height="85" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.9864 13.7676C26.3619 13.7676 25.298 13.7676 24.2573 14.2535C23.2859 14.7162 22.4996 15.4335 21.9445 16.3591C21.4126 17.3077 21.1813 18.3721 21.2738 19.4364C21.3663 20.5933 21.9214 21.5189 22.2683 22.0742L36.9082 47.6419C37.2782 48.2897 37.9721 48.6831 38.689 48.6831C39.4291 48.6831 40.0998 48.2897 40.4699 47.6419L55.4104 21.9816C55.873 21.1487 56.1274 20.1306 56.1274 19.1356C56.1274 18.1638 55.873 17.2383 55.4104 16.3822C55.3873 16.3359 55.3411 16.2896 55.3179 16.2202C54.8554 15.5492 54.3003 14.8088 53.2364 14.3229C52.427 13.9527 51.5944 13.7676 50.5999 13.7676H26.9864ZM36.6307 38.8031L25.83 19.9223C25.4368 19.3207 25.4137 19.1819 25.3905 19.0894C25.3674 18.858 25.4137 18.6497 25.5293 18.4646C25.645 18.2795 25.8068 18.1176 25.9919 18.025C26.1306 17.9556 26.3388 17.9324 26.9632 17.9324H36.6075V38.8031H36.6307ZM51.5944 18.1638C51.6637 18.2332 51.7331 18.3258 51.8488 18.4878C51.9644 18.696 52.0107 18.9043 52.0107 19.1588C52.0107 19.4596 51.9413 19.7604 51.8256 19.9686L40.7937 38.9419V17.9324H50.623C51.0624 17.9324 51.2937 18.0019 51.525 18.0944C51.525 18.0944 51.5481 18.1176 51.5944 18.1638Z"
        fill="url(#paint0_linear_1588_2128)" />
      <path
        d="M76.2952 17.7933L55.0408 0.439625C54.6939 0.161967 54.2544 0 53.815 0H38.6432C38.5969 0 38.5506 0 38.5044 0.0231382C38.4581 0 38.4119 0 38.3656 0H23.1938C22.7312 0 22.3149 0.161967 21.968 0.439625L0.713557 17.7933C-0.0959166 18.4643 -0.234683 19.6443 0.389767 20.4773L9.24772 32.0695L2.70255 37.1368C2.30938 37.4607 2.05497 37.9235 1.98559 38.4556C1.9162 38.9647 2.05497 39.4969 2.37876 39.8902L36.9548 84.2229C37.3249 84.6857 37.8799 84.9634 38.4813 84.9634C39.0826 84.9634 39.6377 84.6857 40.0077 84.1998L74.1906 39.8671C74.8151 39.0572 74.6994 37.8772 73.9131 37.2062L67.8073 31.9538L76.5728 20.4773C77.2435 19.6443 77.1047 18.4411 76.2952 17.7933ZM70.0045 38.9647L38.4813 79.8498L6.6574 39.0341L11.6299 35.17L36.7467 68.0262C37.1399 68.5353 37.718 68.7898 38.2962 68.7898C38.3656 68.7898 38.435 68.7898 38.5044 68.7666C38.5738 68.7666 38.6432 68.7898 38.7125 68.7898C39.2907 68.7898 39.8689 68.5353 40.2621 68.0262L65.4714 35.0543L70.0045 38.9647ZM38.5044 63.9076L4.62216 19.598L23.8645 3.88721H38.3425C38.3888 3.88721 38.435 3.88721 38.4813 3.86407C38.5275 3.86407 38.5738 3.88721 38.62 3.88721H53.098L72.3404 19.598L38.5044 63.9076Z"
        fill="url(#paint1_linear_1588_2128)" />
      <defs>
        <linearGradient id="paint0_linear_1588_2128" x1="28.5339" y1="10.885" x2="49.7615" y2="46.8275"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.015" stop-color="#68DDEF" />
          <stop offset="0.165" stop-color="#73C5EF" />
          <stop offset="0.2505" stop-color="#7DB5F4" />
          <stop offset="0.3834" stop-color="#81A7F7" />
          <stop offset="0.5038" stop-color="#829DFF" />
          <stop offset="0.6646" stop-color="#B49DFF" />
          <stop offset="0.7977" stop-color="#D09EF7" />
          <stop offset="1" stop-color="#EBA7CC" />
        </linearGradient>
        <linearGradient id="paint1_linear_1588_2128" x1="16.0741" y1="-7.01457" x2="70.0095" y2="75.8491"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.015" stop-color="#68DDEF" />
          <stop offset="0.165" stop-color="#73C5EF" />
          <stop offset="0.2505" stop-color="#7DB5F4" />
          <stop offset="0.3834" stop-color="#81A7F7" />
          <stop offset="0.5038" stop-color="#829DFF" />
          <stop offset="0.6646" stop-color="#B49DFF" />
          <stop offset="0.7977" stop-color="#D09EF7" />
          <stop offset="1" stop-color="#EBA7CC" />
        </linearGradient>
      </defs>
    </svg>
    <div class="text-gray">Total balance</div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="fs-32">0.000
      </div>
      <img style="height: 20px;width: 20px;" class="ms-2" src="@/assets/icon/toncoin_icon.svg">
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="fs-20 text-skyblue">+0.000 TON </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mx-5 mt-3 px-3">
      <router-link to="/deposit">
        <div><img src="@/assets/icon/deposit_icon.svg" alt=""></div>
        <div class="text-gray fs-12 mt-2">Deposit</div>
      </router-link>
      <router-link to="/wellcome">
        <div><img src="@/assets/icon/withdraw_icon.svg" alt=""></div>
        <div class="text-gray fs-12 mt-2">Withdraw</div>
      </router-link>
      <router-link to="/history" class="text-decoration-none">
        <div><img src="@/assets/icon/history_icon.svg" alt=""></div>
        <div class="text-gray fs-12 mt-2 ">History</div>
      </router-link>
      <div>
        <div><img src="@/assets/icon/personal_icon.svg" alt=""></div>
        <div class="text-gray fs-12 mt-2">Personal</div>
      </div>
    </div>
    <div class="mt-3">
      <div class="fs-20 text-gray text-start ms-3">ALL</div>
      <div class="bg-lightblack5 fs-16  text-start ms-3 me-3 p-3 border-radius-10">
        <div class="d-flex justify-content-between align-items-center">
          <div>Total staking</div>
          <div>2,297,319.963<img class="ms-2" src="@/assets/icon/toncoin_icon.svg"></div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div>Total reward paid</div>
          <div>+4,734.098<img class="ms-2" src="@/assets/icon/toncoin_icon.svg"></div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div>APY</div>
          <div>6.03%</div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="fs-20 text-gray text-start ms-3">Your account</div>
      <div class="bg-lightblack5 fs-16  text-start ms-3 me-3 p-3 border-radius-10">
        <div class="d-flex justify-content-between align-items-center">
          <div><img class="me-2" src="@/assets/icon/tonstake_icon_white.svg">Your total balance</div>
          <div>+0.000
            <img class="ms-2" src="@/assets/icon/toncoin_icon.svg">
            <img class="ms-2" src="@/assets/icon/right_arrow.svg">
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div><img class="me-2" src="@/assets/icon/ticket_icon.svg">Your Reward</div>
          <div>+0.000
            <img class="ms-2" src="@/assets/icon/toncoin_icon.svg">
            <router-link to="/history"><img class="ms-2" src="@/assets/icon/right_arrow.svg"></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
a {
  text-decoration: none;
}
</style>