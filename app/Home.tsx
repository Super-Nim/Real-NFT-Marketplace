import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./home.module.css";
import Image from "next/image";
import AssetOverview from "./components/asset-overview";

interface HomeProps {
  data: any;
}

export function Home({ data }: HomeProps) {
  const mockData = ["1", "2", "3", "4", "5"];

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
              Ethereum via Cloudfront CDN
            </span>

            <h2>Find Multi-chain Real Estate near you!</h2>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-3xl">Top Performers</span>
          </div>
          {/*  abstract into component */}
          {data.tokens.length > 0 &&
            data.tokens.map((obj: any) => (
              <AssetOverview
                title={obj.token.name}
                imageUrl={obj.token.image}
                key={obj.token.tokenId}
              />
            ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
