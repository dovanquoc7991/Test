import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Dán cấu hình Firebase của bạn vào đây
const firebaseConfig = {
  apiKey: "AIzaSyDpYJntSHxjsBKk9KwuYMeXBUc0yyqsCkc",
  authDomain: "thiep-cuoi-wedding.firebaseapp.com",
  projectId: "thiep-cuoi-wedding",
  storageBucket: "thiep-cuoi-wedding.appspot.com",
  messagingSenderId: "516874287771",
  appId: "1:516874287771:web:43f4dbdb68b958e1ff243e",
  measurementId: "G-5L2G5NK9M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);