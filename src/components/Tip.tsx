import React from 'react';

interface TipProps {
  numberBg: string;
  headerBg: string;
  index: number;
}

const Tip: React.FC<TipProps> = ({ numberBg, headerBg, index }) => {
  return (
    <div className="w-full max-w-[400px] relative py-3 px-2 md:px-3 shadow-md rounded-xl flex gap-4 text-[#122940] bg-white">
      <span
        className={`h-1/2 px-3 py-3 rounded-md font-[400] text-[16px] md:text-[20px] ${numberBg}`}
      >
        {' '}
        {index}
      </span>

      <div>
        <h4
          className={`text-center py-3 rounded-md font-[600] text-[16px] md:text-[20px] leading-[24px] ${headerBg}`}
        >
          Verify Student Mail
        </h4>
        <p className="mt-2 font-[400] text-[14px] md:text-[16px]">
          Click on the link sent to your student E-mail
        </p>
      </div>
    </div>
  );
};

export default Tip;
