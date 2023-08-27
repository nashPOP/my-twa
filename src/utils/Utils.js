import * as bootstrap from "bootstrap";
import * as axios from "@/axios/app.js";

export function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
}

export function sum(items, prop) {
  var sum = 0;
  items.forEach((item) => {
    sum += parseFloat(item[prop]);
  });

  return sum;
}

export function closeModal(elment) {
  const currentModal = document.getElementById(elment);
  const modal = bootstrap.Modal.getInstance(currentModal); // Returns a Bootstrap modal instance

  if (modal) {
    modal.hide();
  }
}

export function openModal(elment) {
  var myModal = new bootstrap.Modal(document.getElementById(elment));
  myModal.show();
}

export function shortAddress(val) {
  let ans = "";
  var fistWords = val.substring(0, 16);
  var lastWords = val.substring(val.length - 16, val.length);
  ans = fistWords + "..." + lastWords;
  return ans;
}
class TonProofDemoApiService {
  constructor() {
    this.localStorageKey = "demo-api-access-token";
    this.host = "https://apiv2dev.tondrive.io";
    this.accessToken = null;
    this.accessToken = localStorage.getItem(this.localStorageKey);

    if (!this.accessToken) {
      this.generatePayload();
    }
  }

  async generatePayload() {
    const response = await axios.generatePayload();
    return response.data.data.payload;
  }

  async checkProof(proof, account) {
    try {
      // const reqBody = {
      //   address: account.address,
      //   network: account.chain,
      //   proof: {
      //     ...proof,
      //     state_init: account.walletStateInit,
      //   },
      // };
      const reqBody = {
        walletInfo: {
          account: { address: account.address, chain: account.chain },
          connectItems: {
            tonProof: {
              proof: {
                ...proof,
                state_init: account.walletStateInit,
              },
            },
          },
        },
      };
      const response = await axios.checkProof(reqBody);
      if (response?.data.data) {
        localStorage.setItem(this.localStorageKey, response.data.data);
        localStorage.setItem("chain", account.chain);
        localStorage.setItem(
          "token.expire",
          new Date().getTime() + 1440 * 60000
        );
        this.accessToken = response.token;
      }
      return response;
    } catch (e) {
      console.log("checkProof error:", e);
      return "false";
    }
  }

  async getAccountInfo(account) {
    const response = await (
      await fetch(`${this.host}/dapp/getAccountInfo?network=${account.chain}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      })
    ).json();

    return response;
  }

  reset() {
    this.accessToken = null;
    localStorage.removeItem(this.localStorageKey);
    this.generatePayload();
  }
}

export const TonProofDemoApi = new TonProofDemoApiService();
