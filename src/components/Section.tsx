import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  imageURL: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, imageURL, className }) => {
  return (
    <section
      className={`w-[90%] mx-auto max-w-[1200px] relative flex flex-col py-[50px] gap-12 ${className}`}
    >
      <div className="w-full md:w-1/2 relative">{children}</div>
      <div className="w-full mt-8 md:mt-auto md:w-1/2 relative">
        <img src={imageURL} alt="section-image" />
      </div>
    </section>
  );
};

export default Section;
