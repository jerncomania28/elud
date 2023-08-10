import React from 'react';

// components
import AuthContainer from '../Container/AuthContainer';
import SignInForm from '../components/SignInForm/SignInForm';

const SignIn: React.FC = () => {
  return (
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
  );
};

export default SignIn;
