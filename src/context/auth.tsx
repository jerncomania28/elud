import { DocumentData } from 'firebase/firestore/lite';
import React, { createContext, useState } from 'react';

interface currentUserProps extends DocumentData {
  email: string;
  displayName: string;
  id: string;
  matric_no: string;
  phone_number: string;
}

const defaultCurrentUser = {
  email: '',
  displayName: '',
  id: '',
  matric_no: '',
  phone_number: '',
};

interface InitialStateProps {
  isLoggedIn: boolean;
  currentUser: currentUserProps;
  handleIsLoggedIn: (_ac: boolean) => void;
  handleCurrentUser: (currentUser: currentUserProps) => void;
}

const initialState = {
  isLoggedIn: false,
  handleIsLoggedIn: () => null,
  currentUser: defaultCurrentUser,
  handleCurrentUser: () => null,
};

export const AuthContext = createContext<InitialStateProps>(initialState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<currentUserProps>(
    defaultCurrentUser,
  );

  const handleIsLoggedIn = (_ac: boolean) => {
    setIsLoggedIn(_ac);
  };

  const handleCurrentUser = (currentUser: currentUserProps) => {
    setCurrentUser(currentUser);
  };

  const value = {
    currentUser,
    isLoggedIn,
    handleIsLoggedIn,
    handleCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
