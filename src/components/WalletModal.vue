<template>
    <div>
        <div id="walletSwitchModal" class="modal fade" tabindex="-1" aria-hidden="true" data-bs-keyboard="false"
            ref="modalRef">
            <div class="modal-dialog modal-dialog-centered qrcode-Modal">
                <div class="modal-content border-dashed bg-unset">
                    <div class="modal-body border-radius-25 bg-darkblue py-4">
                        <h5 class="fw-bold text-dark">Connect Wallet</h5>
                        <div>
                            <div v-for="wallet in walletsList" :key="wallet.name">
                                <div class="btn btn-wallet text-dark form-control px-3 py-2" :class="isMobileVal &&
                                    wallet.name !== 'Tonkeeper' &&
                                    wallet.name !== 'Tonhub'
                                    ? 'mobile-noShow'
                                    : ''
                                    " @click="
        connectWallet(
            wallet.injected,
            wallet.universalLink,
            wallet.bridgeUrl,
            wallet.jsBridgeKey
        )
        ">
                                    <div class="d-flex align-items-center justify-content-between ms-3">
                                        <span class="fw-bold fw-4 text-start" style="min-width: 140px"><img
                                                style="width: 45px; height: 45px" class="me-2 rounded-circle"
                                                :src="wallet.imageUrl" />{{ wallet.name }}</span>
                                        <div class="fw-bold me-4 wallet-connect-text">Connect</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-0 mt-3 w-100 cursor-pointer text-gray" data-bs-dismiss="modal"
                            data-bs-target="#walletSwitchModal">
                            Close
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="QrCodeModal" class="modal fade static" tabindex="-1" aria-hidden="true" data-bs-backdrop="static"
            data-bs-keyboard="false">
            <div class="modal-dialog modal-dialog-centered qrcode-Modal">
                <div class="modal-content">
                    <div class="modal-body py-5">
                        <QrcodeVue v-if="qrCodeLink" class="mt-2" :value="qrCodeLink" :size="'220'"></QrcodeVue>
                        <!-- <QrcodeVue
              class="mobile-noShow"
              :value="qrCodeLink"
              size="220"
              level="H"
            /> -->
                        <div class="text-dark textQRcode mobile-noShow">
                            Scan the QR code with your phone’s camera
                        </div>
                        <a rel="noreferrer noopener" target="_blank"
                            class="w-100 btn btn-outline-primary rounded-pill mt-2 pc-noShow">
                            Go to Tonkeeper
                        </a>
                        <div class="text-dark textQRcode" />
                        <button type="button" class="btn btn-outline-secondary form-control rounded-pill mt-3"
                            data-bs-dismiss="modal" data-bs-target="#QrCodeModal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { connector } from "@/utils/connector";
import { closeModal, openModal, TonProofDemoApi } from "@/utils/Utils";
import QrcodeVue from "qrcode.vue";
import { isMobile } from "is-mobile";
const walletsList = ref([]);
const isMobileVal = ref(false);
const qrCodeLink = ref("");

onMounted(async () => {
    isMobileVal.value = isMobile();
    connector.restoreConnection();
    walletsList.value = (
        await connector.getWallets().then((res) => {
            console.log(res);
            return res.filter(
                (a) =>
                    a.name == "Tonkeeper" ||
                    a.name == "Tonhub" ||
                    a.name == "MyTonWallet" ||
                    a.name == "OpenMask"
            );
        })
    );
});

const connectWallet = async (
    injected,
    universalLink,
    bridgeUrl,
    jsBridgeKey
) => {
    if (connector.connected === true) {
        connector.disconnect();
    }

    const t = await TonProofDemoApi.generatePayload().then((r) => {
        return r;
    });

    if (!injected) {
        const walletConnectionSource = {
            universalLink: universalLink,
            bridgeUrl: bridgeUrl,
        };

        const showuniversalLink = connector.connect(walletConnectionSource, {
            tonProof: t,
        });
        qrCodeLink.value = showuniversalLink;
        closeModal("walletSwitchModal");
        if (!isMobileVal.value) {
            openModal("QrCodeModal");
        } else {
            window.open(qrCodeLink.value, "_self", "noreferrer noopener");
        }
    } else {
        const walletConnectionSource = {
            jsBridgeKey: jsBridgeKey,
        };

        try {
            connector.connect(walletConnectionSource, {
                tonProof: t,
            });
        } catch (e) {
            // isContractSuccess.value = false;
            // alertText.value =
            //   "There is an attempt to connect to the injected wallet while it is not exists in the webpage.";
            closeModal("walletSwitchModal");
        }
    }
};


</script>
