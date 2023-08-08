import React from 'react';

import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';

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
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
