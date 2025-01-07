import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    serverTimestamp,
} from "firebase/firestore";

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const getFirebaseDb = (config: FirebaseConfig) => {
    const app = initializeApp(config);
    return getFirestore(app);
};

export { getFirebaseDb, collection, getDocs, addDoc, serverTimestamp };
