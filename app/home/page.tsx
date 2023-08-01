"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./page.module.css";
import Image from "next/image";

// TODO: HTML structure for home page
// 1. fix web3made logo, zoomed out
export default function page() {
  return (
    <div className={styles.container}>
      <nav className="flex justify-between items-start p-4">
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
          {/* TODO: continue here */}
          <div className="flex">
            <div className="flex flex-col gap-3">
              <div>
                <Image
                  src="/multifamily1.jpeg"
                  alt="eth"
                  width="75"
                  height="75"
                />
              </div>
              <div>
                <Image src="/mf-1.jpeg" alt="eth" width="75" height="75" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
