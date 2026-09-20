import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  type Auth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

export const isFirebaseConfigured = (): boolean => {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== 'YOUR_PROJECT_ID'
  );
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

if (isFirebaseConfigured()) {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
}

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export interface AuthResult {
  accessToken: string;
  user: {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string;
  };
}

/**
 * Sign in with Google Popup via Firebase Authentication
 * Returns the accessToken and user details
 */
export const signInWithGoogle = async (): Promise<AuthResult> => {
  if (!isFirebaseConfigured() || !auth) {
    throw new Error(
      'Firebase is not yet configured with real credentials. Please add your Firebase configuration in the .env file.'
    );
  }

  const result = await signInWithPopup(auth, googleProvider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  
  // Prefer OAuth access token; fallback to ID token if provider token not directly returned
  const accessToken = credential?.accessToken || (await result.user.getIdToken());

  return {
    accessToken,
    user: {
      displayName: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL,
      uid: result.user.uid,
    },
  };
};

/**
 * Sign out current user
 */
export const logOut = async (): Promise<void> => {
  if (auth) {
    await signOut(auth);
  }
};

export { auth };
