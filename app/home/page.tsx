"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./page.module.css";
import Image from "next/image";

// TODO: HTML structure for home page
export default function page() {
  return (
    <div className={styles.container}>
      <nav className="flex items-center">
        <Image src="/vercel.svg" alt="epic" width="50" height="50" />

        <ConnectButton />
      </nav>
      <main>
        <div>
          <h1>Reservoir NFT Explorer</h1>
          <h2>Explore NFTs from the Reservoir Protocol</h2>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
