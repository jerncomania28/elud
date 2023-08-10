import React from 'react';

import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ErrorPage from './pages/ErrorPage';
import Verification from './pages/Verification';

//layouts
import AuthLayout from './layouts/AuthLayout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        }
      />
      <Route
        path="/signin"
        element={
          <AuthLayout>
            <SignIn />
          </AuthLayout>
        }
      />
      <Route path="/verify" element={<Verification />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
