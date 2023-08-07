import React, { createContext, useState } from 'react';

interface InitialStateProps {
  isLoggedIn: boolean;
  handleIsLoggedIn: (_ac: boolean) => void;
}

const initialState = {
  isLoggedIn: false,
  handleIsLoggedIn: () => null,
};

export const AuthContext = createContext<InitialStateProps>(initialState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleIsLoggedIn = (_ac: boolean) => {
    setIsLoggedIn(_ac);
  };

  const value = {
    isLoggedIn,
    handleIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
