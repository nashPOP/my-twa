import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ring',
      name: 'ring',
      component: () => import('../views/RingView.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue')
    },
    {
      path: '/wellcome',
      name: 'wellcome',
      component: () => import('../views/WellcomeView.vue')
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('../views/Deposit/DepositView.vue')
    },
    {
      path: '/depositDone',
      name: 'depositDone',
      component: () => import('../views/Deposit/DepositDoneView.vue')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('../views/Withdraw/WithdrawView.vue')
    },
    {
      path: '/withdrawDone',
      name: 'withdrawDone',
      component: () => import('../views/Withdraw/WithdrawDone.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/Personal/PersonalView.vue')
    },
    {
      path: '/personal/account_info',
      name: 'account_info',
      component: () => import('../views/Personal/AccountInfoView.vue')
    },
    {
      path: '/personal/email',
      name: 'email',
      component: () => import('../views/Personal/EmailView.vue')
    },
    {
      path: '/personal/address',
      name: 'address',
      component: () => import('../views/Personal/AddressView.vue')
    },
    {
      path: '/personal/referral',
      name: 'referral',
      component: () => import('../views/Personal/ReferalView.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUp/SignUpView.vue')
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: () => import('../views/ForgetPassword/ForgetPassword.vue')
    },
  ]
})

export default router
