import React from 'react';

//container
import AuthContainer from '../Container/AuthContainer';
import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUp: React.FC = () => {
  return (
    <AuthContainer>
      <SignUpForm />
    </AuthContainer>
  );
};

export default SignUp;
