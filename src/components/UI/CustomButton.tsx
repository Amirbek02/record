"use client";

export interface CustomButtonProps {
	title?: string;
	containerStyles?: string;
	textStyles?: string;
	type?: "button" | "submit" | "reset";
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({
	title,
	containerStyles = "",
	textStyles = "",
	type = "button",
	onClick,
}: CustomButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`rounded-[80px] bg-[rgb(46,48,149)] box-border w-[160px] h-[56px] ${containerStyles}`}>
			<span
				className={`font-[500px] text-[22px] leading-[27px] font-Montserrat ${textStyles}`}>
				{title}
			</span>
		</button>
	);
};

export default CustomButton;
