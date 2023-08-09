import { tmpdir } from "os";
import * as crypto from "crypto";
import { mkdir } from "fs/promises";
import { BundlrClient } from "../config";

export async function upload() {
  const guuid = crypto.randomUUID();
  return `${tmpdir()}/${guuid}`;
}

export async function createFolderPath(folderPath: string) {
  await mkdir(folderPath, { recursive: true });
}

export async function uploadMetadata(folderPath: string) {
  try {
    return await BundlrClient.uploadFolder(folderPath);
  } catch (error) {
    console.log("could not upload folder", error);
  }
}
