<template>
    <div v-if="pageType === 'confirm'" class="forget-password">
        <div class="text-center h-100 pt-5">
            <div class="px-4">
                <img src="@/assets/icon/forgetPassword/key_icon.svg">
                <div class="text-dark t fs-16 fw-bold my-3">Forget password</div>
            </div>
            <div class="text-gray text-start ms-3 fs-12">
                YOUR Email
            </div>
            <div class="d-flex bg-lightblack5 align-items-center mx-3">
                <input :class="isEmailPass === false ? 'shake text-danger' : ''" class="form-control  text-dark"
                    v-model="email" type="text" placeholder="Email" />
                <div class="me-3" v-if="isEmailVerify">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 8.5L5.83176 13.7944C5.91474 13.8958 6.07258 13.8866 6.14322 13.7762L14 1.5"
                            stroke="#007AFF" stroke-width="2.33" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div class="mx-3">
                <button @click="forgerPasswordConfirm" class="bg-skyblue fs-14 mt-3">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import WebApp from '@twa-dev/sdk'

const test = inject("test");
const email = ref("");
const isEmailPass = ref<any>(null);

const pageType = ref("confirm")
if (!test) {
    const router = useRouter();
    WebApp.BackButton.show();
    WebApp.BackButton.onClick(() => {
        router.back();
    })
    WebApp.BackButton.show()
}

const isEmailVerify = computed(() => {
    const rule = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return rule.test(email.value);
});

const forgerPasswordConfirm = () => {
    if (isEmailVerify.value === true) {
        pageType.value = "sendEmail"
    } else {
        isEmailPass.value = false;
        setTimeout(() => { isEmailPass.value = true }, 1000)
    }
}
</script>

<style lang="scss" scope>
.forget-password {
    input {
        height: 44px;
        background-color: var(--lightblack5);
        border: 1px solid rgb(0, 0, 0)00;

        &:focus {
            background-color: var(--lightblack5);

            border-color: none;
            box-shadow: none;
        }
    }

    button {
        width: 100%;
        padding: 8px 0;
        border: none;
        color: #f8f8f8;
        font-weight: bold;
        border-radius: 10px;
    }

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--gray4);
        opacity: 1;
        /* Firefox */
    }
}
</style>