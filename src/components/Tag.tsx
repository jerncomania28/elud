import React from 'react';

export interface TagProps {
  className: string;
  tagText: string;
}

const Tag: React.FC<TagProps> = ({ className, tagText }) => {
  return (
    <div
      className={`py-2 px-6 rounded-xl border-[1px] border-solid my-2 mr-2 ${className}`}
    >
      <span className="whitespace-nowrap font-[600] text-[16px] tracking-[2%] leading-[24px] ">
        {tagText}
      </span>
    </div>
  );
};

export default Tag;
