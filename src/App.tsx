import React from 'react';

import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ErrorPage from './pages/ErrorPage';
import Verification from './pages/Verification';
import Dashboard from './pages/Dashboard';
import MakePayment from './pages/MakePayment';
import Transactions from './pages/Transactions';

//layouts
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

//protected routes\
import ProtectedRoutes from './components/ProtectedRoutes.';

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
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/make-payment"
        element={
          <ProtectedRoutes>
            <AdminLayout>
              <MakePayment />
            </AdminLayout>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoutes>
            <AdminLayout>
              <Transactions />
            </AdminLayout>
          </ProtectedRoutes>
        }
      />
      <Route path="/verify" element={<Verification />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
