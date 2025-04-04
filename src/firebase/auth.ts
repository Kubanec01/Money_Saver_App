import { auth } from "./firebaseConfig";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";

export const doCreateUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password: string) => {
  if (auth.currentUser) {
    return updatePassword(auth.currentUser, password);
  }
  return null
};

export const doSendEmailVerification = () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  }
};
