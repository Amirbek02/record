"use client";

export interface CustomButtonProps {
  title?: string;
  containerStyles?: string;
  textStyles?: string;
}

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      className={`rounded-[80px] bg-[rgb(46,48,149)] box-border w-[160px] h-[56px] ${containerStyles}`}
    >
      <span
        className={`font-[500px] text-[22px] leading-[27px] font-Montserrat  ${textStyles} `}
      >
        {title}
      </span>
    </button>
  );
};

export default CustomButton;
