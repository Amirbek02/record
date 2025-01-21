"use client";
import React, { useState } from "react";
import { Button } from "@/components/UI/button";
import ReactPlayer from "react-player";

const LessonsList = () => {
	const videosCount = 6; // Update if the number of videos changes dynamically
	const [playStates, setPlayStates] = useState(Array(videosCount).fill(false));

	const handlePlay = (index: number) => {
		setPlayStates((prev) =>
			prev.map((play, i) => (i === index ? true : false))
		);
	};

	const handlePause = (index: number) => {
		setPlayStates((prev) =>
			prev.map((play, i) => (i === index ? false : play))
		);
	};

	return (
		<div className="w-[90%] lg:w-full max-w-[1024px] mx-[auto] py-[50px]">
			<h1 className="font-semibold text-[24px] text-[#4C4C4C] mb-[16px]">
				1-бөлүм Математика{" "}
			</h1>
			<div className="flex gap-[10px] flex-wrap">
				{Array(videosCount)
					.fill(null)
					.map((item, index) => (
						<div key={index}>
							<div className="mx-auto w-full h-[206px] md:w-[290px] lg:w-[290px] rounded-[20px] overflow-hidden object-cover">
								<div
									className={`relative rounded-[20px] overflow-hidden transition-all duration-500 ease-in-out ${
										playStates[index]
											? "border-[#2E3095] bg-[black]"
											: "border-0 bg-[black]"
									}`}>
									<ReactPlayer
										url="https://www.youtube.com/embed/kC1i8D9B4kA"
										playing={playStates[index]}
										controls
										width="290px"
										height="206px"
										onPlay={() => handlePlay(index)}
										onPause={() => handlePause(index)}
									/>

									{!playStates[index] && (
										<div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0 w-[127px] h-[26px] flex items-center justify-center rounded-[80px] bg-blue-600 absolute bottom-[20px] right-[15px]">
											<h3 className="text-[#fff] text-[16px] font-bold tracking-[2%]">
												Математика
											</h3>
										</div>
									)}
								</div>
							</div>

							<h2 className="w-[330px] text-[16px] font-semibold text-[#252641] mt-[15px]">
								Математика боюнча 1 - видео сабакка кош келиңиз!
							</h2>
						</div>
					))}
			</div>
			<div className="flex gap-[10px] mt-[100px] md:mt-[70px] justify-end">
				<Button className="text-[#fff] font-medium text-[20px]">
					Артка
				</Button>
				<Button className="text-[#fff] font-medium text-[20px]">
					Алдыга
				</Button>
			</div>
		</div>
	);
};

export default LessonsList;
