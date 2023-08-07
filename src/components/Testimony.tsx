/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

interface TestimonyProps {
  base: number;
  subtext: string;
  componentRef: React.RefObject<HTMLDivElement>;
  className?: string;
  isMoney?: boolean;
  isUnit?: boolean;
}

const Testimony: React.FC<TestimonyProps> = ({
  base,
  subtext,
  componentRef,
  className,
  isMoney,
  isUnit,
}) => {
  const [value, setValue] = React.useState<number>(0);

  const handleValueIncrease = () => {
    if (value < base) {
      setValue(value + 1);
    }
  };
  React.useEffect(() => {
    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleValueIncrease();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (componentRef?.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef?.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [value]);

  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <h1 className="text-[32px] font-[700] tracking-[2%] leading-[39px]">
        {isMoney && isUnit
          ? `$${value}M+`
          : isMoney
          ? `${value}M+`
          : `${value}.0`}
      </h1>
      <small className="text-[#19D490] font-[500] text-[12px] tracking-[2%] leading-[17px]">
        {subtext}
      </small>
    </div>
  );
};

export default Testimony;
