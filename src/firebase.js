import firebaseConfig from "./firebaseConfig";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
