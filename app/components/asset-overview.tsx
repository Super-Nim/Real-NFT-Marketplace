import Image from "next/image";

interface AssetOverviewProps {
  title: string;
  imageUrl: string;
}

export default function AssetOverview({ title, imageUrl }: AssetOverviewProps) {
  return (
    <div className="flex">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Image src={imageUrl} alt="eth" width="75" height="75" />
          <div>
            <span>{title}</span>
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
      </div>
    </div>
  );
}
