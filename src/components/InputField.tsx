import React from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

interface InputFieldProps {
  label: string;
  type: string;
  id?: string;
  name: string;
  className?: string;
  labelStyle?: string;
  value: string;
  viewPassword?: boolean;
  handleViewPassword?: () => void;
  isPassword?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  className,
  labelStyle,
  value,
  isPassword,
  viewPassword,
  handleViewPassword,
  handleChange,
  error,
}) => {
  return (
    <>
      <div className={`flex  my-2 relative ${className}`}>
        <label
          htmlFor={`#${id}`}
          className={`text-[#3475B7] text-[14px] font-[600] tracking-[2%] mb-1 capitalize ${labelStyle}`}
        >
          {label}
        </label>

        <div className="relative">
          <input
            type={type}
            id={id}
            name={name}
            className={`p-[0.5rem] border-[1px] border-solid border-[#A0C2E4] outline-none rounded-md indent-[10px] w-full font-[500] tracking-[2%]`}
            value={value}
            onChange={handleChange}
          />
          {isPassword && (
            <FontAwesomeIcon
              icon={viewPassword ? faEyeSlash : faEye}
              className="absolute top-[1rem] right-[1rem] cursor-pointer text-[#3475B7]"
              onClick={handleViewPassword}
            />
          )}
        </div>
      </div>
      {error && <small className="text-red-600 font-[500]">{error}</small>}
    </>
  );
};

export default InputField;
