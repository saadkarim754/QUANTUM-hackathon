// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Check if Firebase config is available
const isFirebaseConfigured = firebaseConfig.projectId && firebaseConfig.apiKey;

// Initialize Firebase only if configured
const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;

// Initialize Firestore
export const db = app ? getFirestore(app) : null;

// Initialize Analytics (lazy, only in browser environment and if Firebase is configured)
let analytics = null;
if (typeof window !== 'undefined' && app) {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export { analytics };
export default app;