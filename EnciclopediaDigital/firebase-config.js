// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_56UQDnCwS1-KE87QlKN0uYxFAqtf5G4",
  authDomain: "mi-primer-app-df1c8.firebaseapp.com",
  projectId: "mi-primer-app-df1c8",
  storageBucket: "mi-primer-app-df1c8.appspot.com",
  messagingSenderId: "1001820623513",
  appId: "1:1001820623513:web:c341833d2cc1b18da39e08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database = getDatabase(app);
export const db = getFirestore(app);