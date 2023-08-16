/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface MakePaymentDropDownProps {
  options: string[];
  state: string;
  handleChange: any;
}

const MakePaymentDropDown: React.FC<MakePaymentDropDownProps> = ({
  options,
  state,
  handleChange,
}) => {
  const [isDropDown, setIsDropDown] = React.useState<boolean>(false);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <div
      className="w-full max-w-[336px] my-4 py-[8px] px-[12px] relative flex justify-between item-center border-[1px] border-solid border-[#C7DBEF] bg-[#EFF5FB]"
      onClick={handleDropDown}
    >
      <h1 className="text-[16px] font-[500] text-[#285C8F]">
        {' '}
        {state.length > 30 ? `${state.substring(0, 30)}...` : state}
      </h1>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8 9.5999L12 14.3999L7.20005 9.5999"
          stroke="#F4AA00"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {isDropDown && (
        <div className="absolute scroll max-h-[250px] overflow-y-scroll w-full flex flex-col top-[3rem] right-0 bg-white opacity-100 font-[400] text-[14px] z-20 text-[#285C8F] border-[1px] border-solid border-[#C7DBEF]">
          {options.map((option, _idx) => (
            <p
              className="p-[12px] capitalize hover:bg-[#EFF5FB] cursor-pointer"
              key={_idx}
              onClick={handleChange}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakePaymentDropDown;
