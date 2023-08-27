import axios from "axios";



const backend_new = axios.create({
  baseURL: "https://devapi.tonstake.com",
});


backend_new.interceptors.request.use((a) => {
  const token = localStorage.getItem("token");
  if (token) a.headers.Authorization = `Bearer ${token}`;
  return a;
});

export const signIn = (params) => backend_new.post("/auth/signin", params);
export const signUp = (params) => backend_new.post("/auth/signup", params);
export const signOut = () => backend_new.post("/auth/signout");

export const emailVerify = (params) =>
  backend_new.get(`/auth/verify/email?code=${params}`);
export const user = () => backend_new.get("/user");
export const userHistory = (status, page) =>
  backend_new.get(`/user/history?status=${status}&page=${page}`);
export const setUserWallet = (params) =>
  backend_new.post("/user/wallet", params);
export const forgetPasswordSend = (params) =>
  backend_new.post("/auth/forget/send", params);
export const forgetPasswordChange = (params) =>
  backend_new.post("/auth/forget", params);
// export const index = () => backend.get("/");

// export const signIn = (params) => backend.post("/auth/signin", params);

// export const emailVerify = (params) =>
//   backend.post("/auth/confirm/register", params);

// export const walletConfirm = (params) =>
//   backend.post("/auth/confirm/wallet", params);

// export const register = (params) => backend.post("/auth/signup", params);

// export const stake = (params) => backend.post("/my/stake", params);

// export const unStake = (params) => backend.post("/my/unstake", params);

// export const fee = () => backend.get("/my/fee");

export const generatePayload = () => backend_new.get("auth/connect");
export const checkProof = (params) => backend_new.post("auth/connect", params);
