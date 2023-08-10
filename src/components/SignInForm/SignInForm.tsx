import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth';

//utils
import {
  signInViaEmailAndPassword,
  getCurrentUser,
} from '../../utils/firebase';

import storageUtils from '../../utils/storageUtils';

//components
import InputField from '../InputField';

export interface SignInProps {
  email: string;
  password: string;
}

const defaultSignIn = {
  email: '',
  password: '',
};

const SignInForm: React.FC = () => {
  const [signInParameters, setSignInParameters] = React.useState<SignInProps>(
    defaultSignIn,
  );
  const [viewPassword, setViewPassword] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const { handleCurrentUser } = React.useContext(AuthContext);

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInParameters({ ...signInParameters, [name]: value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = signInParameters;
    setIsLoading(true);
    signInViaEmailAndPassword(email, password)
      .then((response) => {
        return getCurrentUser(response.user.uid);
      })
      .then((currentUser) => {
        if (currentUser) {
          const {
            email,
            displayName,
            id,
            matric_no,
            phone_number,
          } = currentUser;
          handleCurrentUser({
            email,
            displayName,
            id,
            matric_no,
            phone_number,
          });
          storageUtils.setItem({
            email,
            displayName,
            id,
            phone_number,
            matric_no,
          });
          toast.success('🦄 user logged in!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        if (err.code === 'auth/wrong-password') {
          toast.error('🦄 wrong Password!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } else if (err.code === 'auth/user-not-found') {
          toast.error('🦄 user not found!', {
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-[90%] md:w-[85%] mx-auto relative">
      <InputField
        type="email"
        name="email"
        label="Student email address"
        value={signInParameters.email}
        handleChange={handleChange}
        className="my-6 flex-col"
      />
      <InputField
        type={viewPassword ? 'text' : 'password'}
        name="password"
        label="Password"
        value={signInParameters.password}
        handleChange={handleChange}
        viewPassword={viewPassword}
        handleViewPassword={handleViewPassword}
        isPassword
        className="my-6 flex-col"
      />
      <button
        className={`w-full py-4 text-center text-[#0D1D2D] bg-[#F4AA00] text-[16px] font-[600] rounded-md outline-none border-none ${
          isLoading || !signInParameters.email || !signInParameters.password
            ? 'opacity-30'
            : ''
        }`}
        onClick={handleSubmit}
        disabled={
          isLoading || !signInParameters.email || !signInParameters.password
        }
      >
        {isLoading ? 'Continuing...' : 'Continue'}
      </button>
    </div>
  );
};

export default SignInForm;
