import axios from "axios";
import { Home } from "./Home";
// TODO: HTML structure for home page
// 0. add commercial real estate to collection
// 1. call reservoir directly
export default async function page() {
  const data = await getTokens();
  return <Home data={data} />;
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
