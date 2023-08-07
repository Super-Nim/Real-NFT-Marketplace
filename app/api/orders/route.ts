import { NextResponse } from "next/server";
import { store } from "../firestore/firestore";
// TODO: use Tsoa

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const epic = await req.json();
    console.log("req.body", epic);
    await store("orders", "test", epic);
    return NextResponse.json({ status: "ok" });
  } catch (e) {
    return new NextResponse("Next.js API route error ", { status: 500 });
  }
};
