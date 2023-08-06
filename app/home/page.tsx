import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";
import AssetOverview from "./components/asset-overview";

// TODO: HTML structure for home page
// 0. add commercial real estate to collection
// 1. call reservoir directly
export default async function page() {
  const mockData = ["1", "2", "3", "4", "5"];
  const data = await getTokens();

  data.tokens.map((token: any) => {
    return console.log(token.token.image);
  });

  return (
    <div className={styles.container}>
      <nav className="flex justify-between items-start">
        <Image src="/web3made.png" alt="epic" width="50" height="50" />

        <ConnectButton label="login" />
      </nav>
      <main>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-3xl">Explore Real Estate</span>
            <span className="flex items-center gap-3 text-3xl">
              on
              <Image
                src="/ethereum-logo.png"
                alt="eth"
                width="40"
                height="40"
              />
              Ethereum
            </span>

            <h2>Find Multi-chain Real Estate near you!</h2>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-3xl">Top Performers</span>
          </div>
          {/*  abstract into component */}
          {data.tokens.length > 0 ? (
            data.tokens.map((obj: any) => (
              <AssetOverview
                title={obj.token.name}
                imageUrl={obj.token.image}
                key={obj.token.tokenId}
              />
            ))
          ) : (
            <>Loading...</>
            // <Suspense fallback={<Loading />} />
          )}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
// continue here
async function getTokens() {
  const { data } = await axios.get(
    "https://api-goerli.reservoir.tools/tokens/v6",
    {
      params: { collection: "0x83114eabba1984751f19d6cc2acb940fbc45fc48" },
    }
  );
  return data;
}

// Add getStaticProps
