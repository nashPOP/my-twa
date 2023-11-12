import { TonConnect } from "@tonconnect/sdk";
const dappMetadata = {
  manifestUrl: "https://nashpop.github.io/my-twa/tonconnect-testnet-manifest.json",
};

export const connector = new TonConnect(dappMetadata);
