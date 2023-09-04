<template>
    <div class="sign-up">
        <div v-if="signUpType === 'email'" class="text-center h-100 pt-5">
            <div class="pb-5 border-radius-25 px-4">
                <div class="text-dark t fs-20 fw-bold">Sign Up</div>
                <div class="d-flex bg-lightblack5 my-3 align-items-center">
                    <input class="form-control  text-dark" v-model="email" type="text" placeholder="Email" />
                    <div class="me-3" v-if="isEmailVerify">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 8.5L5.83176 13.7944C5.91474 13.8958 6.07258 13.8866 6.14322 13.7762L14 1.5"
                                stroke="#007AFF" stroke-width="2.33" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <input class="form-control my-3" type="text" v-model="referralCode" placeholder="Referral code" />
                <div class="d-flex row align-items-center my-2">
                    <div class="d-flex align-items-center">
                        <input type="checkbox" height="13px" id="checkbox" v-model="isTermsAgree" />
                        <label class="ps-3 cursor-pointer text-dark" for="checkbox">I agree to the TonStake.com
                            <a class="cursor-pointer text-decoration-underline" data-bs-toggle="modal"
                                data-bs-target="#TermsOfUse">Terms of use</a>
                        </label>
                    </div>
                    <div v-if="emailErrorMsgShow" class="text-danger text-start">
                        {{ emailMsg }}
                    </div>
                </div>
                <button @click="emailConfirm" class="bg-skyblue fs-14">Confirm</button>
            </div>
        </div>
        <div v-else-if="signUpType === 'password'" class="text-center h-100 pt-5">
            <div class="login-box pb-5 border-radius-25 px-4">
                <div><img src="@/assets/icon/signUp/lock_icon.svg"></div>
                <div class="text-dark t fs-20 fw-bold">Setting password</div>
                <div class="d-flex bg-lightblack5 my-3 align-items-center">
                    <input class="form-control text-dark" v-model="password" type="password" placeholder="Password" />
                    <div class="me-3 d-flex">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="10" height="5" rx="2.5" :fill="passworRank >= 1 ? '#007AFF' : '#6B798A'" />
                        </svg>
                        <svg class="mx-2" width="10" height="6" viewBox="0 0 10 6" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="10" height="5" rx="2.5" :fill="passworRank >= 2 ? '#007AFF' : '#6B798A'" />
                        </svg>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="10" height="5" rx="2.5" :fill="passworRank >= 3 ? '#007AFF' : '#6B798A'" />
                        </svg>

                    </div>
                </div>
                <input v-model="passwordRepert" class="form-control mt-3" type="password"
                    placeholder="Repeat your password" />
                <div v-if="passwordErrorMsg" class="text-danger text-start mt-2">
                    {{ passwordErrorMsg }}
                </div>
                <button @click="passwordConfirm" class="bg-skyblue fs-14 mt-3">Confirm</button>
            </div>
        </div>
        <div v-else class="text-center h-100 pt-5">
            <!-- {{ requestbody }} -->
            <div class="login-box pb-5 border-radius-25 px-4">
                <div><img src="@/assets/icon/signUp/mailbox_icon.svg"></div>
                <div class="text-dark t fs-20 fw-bold">verify your email</div>
                <div class="text-gray mt-3">Your email: {{ requestbody.email }} <br><br>

                    confirm your email and send verification link.
                    once you verify you can’t change your email.
                </div>
            </div>
            <div class="text-skyblue">Resend verify link</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { BackButton } from '@twa.js/sdk';
import { useRouter } from 'vue-router'
import { inject } from "vue"
const test = inject("test");
const email = ref("");
const isTermsAgree = ref(false);
const signUpType = ref("email");
const emailErrorMsgShow = ref(false);
const emailMsg = ref("");
const referralCode = ref("");
if (!test) {
    const router = useRouter();
    const backbutton = new BackButton("6.2");
    backbutton.show();
    backbutton.on('click', () => {
        router.back();
    })
    backbutton.show()

}
const isEmailVerify = computed(() => {
    const rule = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return rule.test(email.value);
});

const emailConfirm = () => {
    if (isEmailVerify.value === true && isTermsAgree.value === true) {
        emailErrorMsgShow.value = false;
        signUpType.value = "password";
    }
    else if (isEmailVerify.value === false) {
        emailMsg.value = "Please enter correct email"
        emailErrorMsgShow.value = true;
    } else if (isTermsAgree.value === false) {
        emailMsg.value = "Please accept the terms to use"
        emailErrorMsgShow.value = true;

    }

}
const password = ref("");
const passwordRepert = ref("");
const passworRank = ref(0);

watch(password, (newVal) => {
    passwordCheck(newVal);
})

const passwordErrorMsg = ref("");
const isPasswordChecked = ref(false);
const requestbody = ref({
    email: "",
    password: "",
    referralCode: "",
})
const passwordCheck = (password: string) => {
    let rule1 = /[A-Z]/;//大寫英文
    let rule2 = /[a-z]/;//小寫英文
    let rule3 = /^.{12,36}$/; //字數12~36字;

    let rulePassObj: { [key: string]: boolean } = { isRule1Pass: rule1.test(password), isRule2Pass: rule2.test(password), isRule3Pass: rule3.test(password) }
    let ruleObj: { [key: string]: string } = { isRule1Pass: "需要大寫英文", isRule2Pass: "需要小寫英文", isRule3Pass: "字數需要12~36個字" }
    let errorMessages: string[] = [];
    for (const key in rulePassObj) {
        if (rulePassObj[key] === false) {
            errorMessages.push(ruleObj[key]);
        }
    }
    if (errorMessages.length > 0) {
        passwordErrorMsg.value = errorMessages.join(", ");
    } else {
        passwordErrorMsg.value = "";
        isPasswordChecked.value = true;
    }
    passworRank.value = Object.values(rulePassObj).filter(value => value === true).length;
}
const passwordConfirm = () => {
    if (!password.value || !passwordRepert.value) {
        passwordErrorMsg.value = "Please Enter Password and Repert Password."
    }
    else if (password.value !== passwordRepert.value) {
        passwordErrorMsg.value = "Password and Confirm Password fields do not match."
    } else if (isPasswordChecked.value === true && password.value === passwordRepert.value) {
        requestbody.value = {
            email: email.value,
            password: password.value,
            referralCode: referralCode.value
        };
        signUpType.value = "sendEmail";

    }
}
</script>
<style lang="scss">
.sign-up {
    input {
        height: 44px;
        background-color: var(--lightblack5);
        border: none;
        color: var(--dark) !important;

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
