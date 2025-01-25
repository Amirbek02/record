"use client";
import CustomButton from "@/components/UI/CustomButton";
import useAuthStore from "@/lib/store/authStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const SignUp = () => {
	const { login, isLoading, error } = useAuthStore();
	const [showPassword, setShowPassword] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const { email, password } = formData;
		try {
			await login(email, password);
		} catch (err) {
			console.error("Error during login:", err);
			alert(error || "Failed to log in. Please try again.");
		}
	};

	const inputClass =
		"font-montserrat font-[400] box-border border-[0.6px] border-gray-300 placeholder-gray-300 text-[rgba(0,0,0,0.44)] w-[270px] mm:w-[360px] xl:w-[500px] rounded-[4px] py-[19px] pl-[15px] mb-[32px] text-[16px] leading-[20px]";

	return (
		<div className="flex justify-center items-center flex-col w-[360px] mm:w-auto">
			<div className="pt-[26px] xl:pt-[120px] pb-[82px] xl:pb-[40px]">
				<Image
					src="/icons/record-logo.svg"
					width={290}
					height={95}
					alt="Sign In"
				/>
			</div>
			<h1 className="hidden xl:block font-montserrat font-medium text-[36px] leading-[44px] tracking-[2%] text-[rgb(76,76,76)] pb-[75px]">
				Кош келдиңиз!
			</h1>

			<form className="flex justify-center items-center flex-col relative">
				<div className="flex flex-col items-start">
					<label
						htmlFor="email"
						className="font-montserrat font-[400] text-[16px] leading-[20px] pb-[6px] text-[rgb(76,76,76)]">
						Телефон номери
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="qwerty@gmail.com"
						value={formData.email}
						onChange={handleInputChange}
						className={inputClass}
					/>
				</div>

				<div className="flex flex-col items-start">
					<label
						htmlFor="password"
						className="font-montserrat font-[400] text-[16px] leading-[20px] pb-[6px] text-[rgb(76,76,76)]">
						Сыр сөз
					</label>
					<div className="relative w-[270px] mm:w-[356px] xl:w-[500px]">
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							name="password"
							placeholder="**********"
							value={formData.password}
							onChange={handleInputChange}
							className={inputClass}
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute top-[30px] right-[25px] transform -translate-y-1/2 text-[rgba(0,0,0,0.44)]">
							{showPassword ? (
								<FaRegEyeSlash size={20} />
							) : (
								<FaRegEye size={20} />
							)}
						</button>
					</div>
				</div>

				<div className="flex justify-between items-center w-[270px] mm:w-[360px] xl:w-[500px] pb-[32px]">
					<label className="flex items-center">
						<input
							type="checkbox"
							checked={isChecked}
							onChange={() => setIsChecked(!isChecked)}
							className="hidden"
						/>
						<div className="w-[20px] h-[20px] border rounded-[4px] flex items-center justify-center">
							{isChecked && (
								<span className="text-[14px] font-bold text-[rgba(0,0,0,0.6)]">
									✔
								</span>
							)}
						</div>
						<span className="font-roboto text-[14px] font-[400] leading-[16px] text-[rgba(0,0,0,0.6)] pl-[17px]">
							Эстеп кал
						</span>
					</label>
					<Link
						href="#"
						className="font-roboto text-[14px] font-[400] leading-[16px] text-[rgb(46,48,149)] underline">
						Сыр сөзүңүздү унуттуңузбу?
					</Link>
				</div>

				<CustomButton
					title="Кирүү"
					containerStyles="rounded-[5px] h-[45px] mm:h-[56px] mm:w-[356px] xl:w-[500px] mb-[32px]"
					textStyles="font-[500] mm:font-[700] text-[21px] mm:text-[24px] leading-[29px] text-[rgb(255,255,255)]"
					onClick={handleSignIn}
				/>

				<div className="flex flex-col items-center pb-[175px]">
					<div className="flex items-center text-[rgb(163,163,174)] font-montserrat text-[16px] font-[500] leading-[20px] pb-[32px]">
						<span className="flex-1 border-t border-[rgb(163,163,174)]"></span>
						<p className="px-[16px]">Же</p>
						<span className="flex-1 border-t border-[rgb(163,163,174)]"></span>
					</div>
					<div className="flex justify-between w-[270px] mm:w-[360px] xl:w-[500px] pb-[32px]">
						<button className="flex items-center border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] px-[10px] py-[15px]">
							<Image
								src="/icons/iphone.svg"
								width={24}
								height={24}
								alt="iCloud"
							/>
							<span className="pl-[10px] text-[rgb(163,163,174)] text-[16px] font-[400]">
								icloud аркылуу
							</span>
						</button>
						<button className="flex items-center border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] px-[10px] py-[15px]">
							<Image
								src="/icons/google.svg"
								width={24}
								height={24}
								alt="Google"
							/>
							<span className="pl-[10px] text-[rgb(163,163,174)] text-[16px] font-[400]">
								Google аркылуу
							</span>
						</button>
					</div>
					<Link
						href="#"
						className="text-[rgb(46,48,149)] font-roboto text-[20px] font-normal underline">
						Катталуу
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
