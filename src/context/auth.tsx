import React, { SetStateAction, createContext, useState } from 'react';

//types
import { currentUserProps, ConfirmPaymentProps } from '../types';

//defaults
import { defaultConfirmPayment, defaultCurrentUser } from '../constants';

interface InitialStateProps {
  isLoggedIn: boolean;
  currentUser: currentUserProps;
  isMobile: boolean;
  isMakePayment: boolean;
  confirmPaymentData: ConfirmPaymentProps;
  handleMakePayment: () => void;
  setIsMobile: React.Dispatch<SetStateAction<boolean>>;
  setConfirmPaymentData: React.Dispatch<SetStateAction<ConfirmPaymentProps>>;
  handleIsLoggedIn: (_ac: boolean) => void;
  handleCurrentUser: (currentUser: currentUserProps) => void;
  handleMobile: () => void;
}

const initialState = {
  isLoggedIn: false,
  isMobile: false,
  isMakePayment: false,
  confirmPaymentData: defaultConfirmPayment,
  handleMakePayment: () => null,
  handleIsLoggedIn: () => null,
  currentUser: defaultCurrentUser,
  handleCurrentUser: () => null,
  setConfirmPaymentData: () => null,
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

  const [isMakePayment, setIsMakePayment] = React.useState<boolean>(false);
  const [confirmPaymentData, setConfirmPaymentData] = React.useState<
    ConfirmPaymentProps
  >(defaultConfirmPayment);

  const handleIsLoggedIn = (_ac: boolean) => {
    setIsLoggedIn(_ac);
  };

  const handleCurrentUser = (currentUser: currentUserProps) => {
    setCurrentUser(currentUser);
  };

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleMakePayment = () => {
    setIsMakePayment(!isMakePayment);
  };

  const value = {
    currentUser,
    isLoggedIn,
    isMobile,
    isMakePayment,
    confirmPaymentData,
    handleMakePayment,
    handleIsLoggedIn,
    handleCurrentUser,
    handleMobile,
    setIsMobile,
    setConfirmPaymentData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
