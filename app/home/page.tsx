"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./page.module.css";
import Image from "next/image";

// TODO: HTML structure for home page
// 1. try getStaticProps to get data from reservoir
export default function page() {
  const mockData = ["1", "2", "3", "4", "5"];
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
          <div className="flex">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Image
                  src="/multifamily1.jpeg"
                  alt="eth"
                  width="75"
                  height="75"
                />
                <div>
                  <span>Multi-Family</span>
                  <div className="flex">
                    <Image
                      src="https://explorer.reservoir.tools/api/reservoir/ethereum/redirect/currency/0x0000000000000000000000000000000000000000/icon/v1"
                      alt=""
                      width="15"
                      height="15"
                    />
                    <p>0.01</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                {mockData &&
                  mockData.map((i) => (
                    <div key={i}>
                      <Image
                        src="/mf-1.jpeg"
                        alt="eth"
                        width="75"
                        height="75"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

// Add getStaticProps
