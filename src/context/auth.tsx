import { DocumentData } from 'firebase/firestore/lite';
import React, { SetStateAction, createContext, useState } from 'react';

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
  isMobile: boolean;
  setIsMobile: React.Dispatch<SetStateAction<boolean>>;
  handleIsLoggedIn: (_ac: boolean) => void;
  handleCurrentUser: (currentUser: currentUserProps) => void;
  handleMobile: () => void;
}

const initialState = {
  isLoggedIn: false,
  isMobile: false,
  handleIsLoggedIn: () => null,
  currentUser: defaultCurrentUser,
  handleCurrentUser: () => null,
  setIsMobile: () => null,
  handleMobile: () => null,
};

export const AuthContext = createContext<InitialStateProps>(initialState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<currentUserProps>(
    defaultCurrentUser,
  );
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const handleIsLoggedIn = (_ac: boolean) => {
    setIsLoggedIn(_ac);
  };

  const handleCurrentUser = (currentUser: currentUserProps) => {
    setCurrentUser(currentUser);
  };

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  const value = {
    currentUser,
    isLoggedIn,
    isMobile,
    handleIsLoggedIn,
    handleCurrentUser,
    handleMobile,
    setIsMobile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
