import { TonConnect } from "@tonconnect/sdk";
const dappMetadata = {
  manifestUrl: "https://demo.tondrive.io/tonconnect-manifest.json",
};

export const connector = new TonConnect(dappMetadata);
