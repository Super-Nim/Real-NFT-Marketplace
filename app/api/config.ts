import Bundlr from "@bundlr-network/client";

export const BundlrClient = new Bundlr(
  process.env.NEXT_BUNDLR_URL!,
  process.env.NEXT_BUNDLR_CURRENCY!,
  process.env.NEXT_BUNDLR_PRIVATE_KEY!,
  {
    providerUrl: process.env.NEXT_BUNDLR_PROVIDER_URL!,
  }
);
