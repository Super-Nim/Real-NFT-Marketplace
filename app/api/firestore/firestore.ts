import { firestore } from "./config";

export async function store<T>(
  collection: string,
  documentId: string,
  entity: any
) {
  const ref = await firestore
    .collection(collection)
    .doc(documentId)
    .set(entity);
  console.log("ref", ref);
}

export async function get<T>(
  collection: string,
  documentId: string
): Promise<T> {
  const snapshot = await firestore.collection(collection).doc(documentId).get();
  const snapshotData = snapshot.data();

  if (!snapshotData) {
    throw new Error(`No data found at path ${collection}/${documentId}`);
  }

  return snapshotData as T;
}
