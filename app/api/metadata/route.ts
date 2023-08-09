// 1. upload metadata to bundlr network
// 2. return metadata url
// 3. pass metadata url to mintNFT function

import { createFolderPath, upload, uploadMetadata } from "./metadata.service";

export const POST = async (req: Request) => {
  try {
    // TODO NOW: Need imageUrl to pass here.
    // upload directly as multipart formData from UI
    // do I need multer? if so, then just set it up.
    const path = await upload();
    await createFolderPath(path);
    const res = await uploadMetadata(path);
  } catch (error) {
    console.log("metadata route error", error);
  }
};
