import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue')
    },
    {
      path: '/ring',
      name: 'ring',
      component: () => import('../views/Home/RingView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/Home/HistoryView.vue')
    },
    {
      path: '/totalBlance',
      name: 'totalBlance',
      component: () => import('../views/Home/TotalBlanceView.vue')
    },
    {
      path: '/totalReward',
      name: 'totalReward',
      component: () => import('../views/Home/TotalRewardView.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignIn/SignInView.vue')
    },
    {
      path: '/signInSuccess',
      name: 'signInSuccess',
      component: () => import('../views/SignIn/SignInSuccessView.vue')
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
