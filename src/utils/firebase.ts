/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';

import { doc, setDoc, getDoc, getFirestore } from 'firebase/firestore';

import { toast } from 'react-toastify';

//utils
import { SignUpParametersProps } from '../components/SignUpForm/SignUpForm';

const firebaseConfig = {
  apiKey: 'AIzaSyDg1BimrxeHdDupBA0E_38GHib7VvuzSEw',
  authDomain: 'elud-3e111.firebaseapp.com',
  projectId: 'elud-3e111',
  storageBucket: 'elud-3e111.appspot.com',
  messagingSenderId: '339253999291',
  appId: '1:339253999291:web:218e4d424aa81b9ba01b9e',
};
initializeApp(firebaseConfig);

const auth = getAuth();
export const signOutUser = async () => await signOut(auth);

const db = getFirestore();

const createUserDoc = async (userAuthId: string, othetProps = {}) => {
  const userDocRef = doc(db, 'users', userAuthId);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        createdAt,
        ...othetProps,
      });
    } catch (err) {
      console.log('error creating user document', err);
      toast.error('🦄 An Error Occured!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }
};

export const createUserViaEmailAndPassword = async (
  userSignUpData: SignUpParametersProps,
) => {
  const { email, password, first_name, last_name, phone_number, matric_no } =
    userSignUpData;

  try {
    const createUserResponse = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await createUserDoc(createUserResponse?.user?.uid, {
      id: createUserResponse?.user?.uid,
      displayName: `${first_name} ${last_name}`,
      email,
      phone_number,
      matric_no,
    });
    if (auth.currentUser !== null) {
      await sendEmailVerification(auth.currentUser);
    }
  } catch (err: any) {
    console.log('create user error', err);
    if (err.code === 'auth/email-already-exists') {
      toast.error('🦄 email already exist!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (err.code === 'auth/email-already-in-use') {
      toast.error('🦄 email already in use!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.error('🦄 An error occured!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }
};

export const signInViaEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const getCurrentUser = async (uid: string) => {
  const currentUserDocRef = doc(db, 'users', uid);
  const currentUser = await getDoc(currentUserDocRef);
  return currentUser.data();
};
