// Firebase Configuration for RSVP System
// ===========================================
//
// Setup steps:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing)
// 3. Enable Firestore Database
// 4. Go to Project Settings > General > Your apps > Add web app
// 5. Copy your Firebase config values into a .env file (see .env.example)
//
// Recommended Firestore Security Rules:
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /rsvps/{rsvpId} {
//       allow create: if true;
//       allow read, update, delete: if false;
//     }
//   }
// }

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function submitRSVP(formData) {
  const docRef = await addDoc(collection(db, 'rsvps'), {
    ...formData,
    submittedAt: serverTimestamp(),
  });
  return docRef.id;
}

export { db };
