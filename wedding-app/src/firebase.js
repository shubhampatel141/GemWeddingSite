// Firebase Configuration for RSVP System
// ===========================================
//
// To connect Firebase Firestore for the RSVP system:
//
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing)
// 3. Enable Firestore Database
// 4. Go to Project Settings > General > Your apps > Add web app
// 5. Copy the config object below and replace the placeholder values
// 6. Install Firebase: npm install firebase
// 7. Uncomment the code below and update RSVP.jsx to use submitRSVP()
//
// Security Rules for Firestore:
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /rsvps/{rsvpId} {
//       allow create: if true;
//       allow read, update, delete: if false;
//     }
//   }
// }

/*
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
*/
