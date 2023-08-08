import React from 'react';

//components
import InputField from '../InputField';

// validation
import validation, { ErrorProps } from './SignUpValidation';

export interface SignUpParametersProps {
  first_name: string;
  last_name: string;
  matric_no: string;
  email: string;
  password: string;
  confirm_password: string;
}

const defaultSignUpParameters = {
  first_name: '',
  last_name: '',
  matric_no: '',
  email: '',
  password: '',
  confirm_password: '',
};

const SignUpForm: React.FC = () => {
  const [signUpParameters, setSignUpParameters] = React.useState<
    SignUpParametersProps
  >(defaultSignUpParameters);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<ErrorProps>({});
  const [viewPassword, setViewPassword] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpParameters({ ...signUpParameters, [name]: value });
  };

  const handleSubmit = () => {
    const errors = validation(signUpParameters);
    setErrors(errors);
    setIsLoading(false);
    console.log('sign up parameters', signUpParameters);
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <>
      <div className="w-[90%] md:w-[80%] relative mx-auto">
        <div className="flex flex-col w-full relative py-3">
          <div className="flex flex-col md:flex-row w-full relative gap-0 md:gap-3">
            <div className="w-full md:w-1/2 ">
              <InputField
                label="first name"
                type="text"
                name="first_name"
                id="first_name"
                className="flex-col"
                handleChange={handleChange}
                value={signUpParameters.first_name}
                error={errors?.first_name}
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <InputField
                label="last name"
                type="text"
                name="last_name"
                id="last_name"
                className="flex-col"
                handleChange={handleChange}
                value={signUpParameters.last_name}
                error={errors?.last_name}
              />
            </div>
          </div>
          <InputField
            label="Matric No."
            type="text"
            name="matric_no"
            id="matric_no"
            className="flex-col"
            handleChange={handleChange}
            value={signUpParameters.matric_no}
            error={errors?.matric_no}
          />

          <InputField
            label="Student e-mail"
            type="email"
            name="email"
            id="email"
            className="flex-col"
            handleChange={handleChange}
            value={signUpParameters.email}
            error={errors?.email}
          />
          <InputField
            label="Password"
            type={viewPassword ? 'text' : 'password'}
            name="password"
            id="password"
            className="flex-col"
            handleChange={handleChange}
            viewPassword={viewPassword}
            handleViewPassword={handleViewPassword}
            value={signUpParameters.password}
            error={errors?.password}
            isPassword
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="flex-col"
            handleChange={handleChange}
            value={signUpParameters.confirm_password}
            error={errors?.confirm_password}
          />
        </div>
      </div>

      <button
        className={`w-full mx-auto py-2 text-center text-[#0D1D2D] bg-[#F4AA00] text-[22px] font-[600] rounded-md outline-none border-none ${
          isLoading ? 'opacity-50' : ''
        }`}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </>
  );
};

export default SignUpForm;
