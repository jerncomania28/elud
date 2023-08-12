import { SignUpParametersProps } from './SignUpForm';

export interface ErrorProps {
  first_name?: string;
  last_name?: string;
  matric_no?: string;
  phone_number?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

const validation = (values: SignUpParametersProps) => {
  const errors: ErrorProps = {};
  const passwordRegex = new RegExp(
    '^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*',
  );

  const matricNoRegex = new RegExp('^\\d{2}/\\d{2}[A-Za-z]{2}\\d{3}$');
  const emailRegex = new RegExp(
    '^[0-9a-zA-Z]+@[a-zA-Z]+\\.students\\.edu\\.ng$',
  );

  if (!values.first_name) {
    errors.first_name = 'first name is required!';
  }

  if (!values.last_name) {
    errors.last_name = 'last name is required!';
  }

  if (!values.phone_number) {
    errors.phone_number = 'phone number is required!';
  }

  if (!values.matric_no) {
    errors.matric_no = 'Matric No. is required.';
  } else if (!matricNoRegex.test(values.matric_no)) {
    errors.matric_no = 'Matric No. is invalid.';
  }

  if (!values.email) {
    errors.email = 'Email is required.';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email is invalid.';
  }
  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      'Password should be more than 8 character and contain atleast 1 uppercase letter and digit.';
  }
  if (!values.confirm_password) {
    errors.confirm_password = 'Confirm password is required.';
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = "Password don't match.";
  }

  return errors;
};

export default validation;
