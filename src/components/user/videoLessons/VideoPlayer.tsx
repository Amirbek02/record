"use client";
// before payment
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
	const [play, setPlay] = useState(false);

	return (
		<div className="w-[90%] max-w-[1440px] mx-auto py-[30px]">
			<div>
				<div className="w-full h-auto md:w-[734px] lg:w-[834px] lg:h-[502px] rounded-[15px] overflow-hidden">
					<div
						className={`relative rounded-[15px] overflow-hidden border-[8px] transition-all duration-500 ease-in-out md:border-[2px] md:border-[#008335] ${
							play ? "border-[#2E3095]" : "border-0"
						}`}>
						<ReactPlayer
							url="/video/nature.mp4"
							controls
							width="100%"
							height="100%"
							className="rounded-[15px]"
							onPlay={() => setPlay(false)}
							onPause={() => setPlay(true)}
						/>
						<div
							className={`transition-all duration-500 ease-in-out ${
								play ? "flex" : "hidden"
							} md:hidden w-[127px] h-[26px] flex items-center justify-center rounded-[80px] bg-blue-600 absolute bottom-[15px] right-[15px]`}>
							<h3 className=" ">Математика</h3>
						</div>
					</div>
				</div>
				<h2 className="text-[16px] md:text-[20px] font-semibold md:font-medium ">
					Математика боюнча 1 - видео сабакка кош келиңиз!
				</h2>
				<div className="flex gap-[10px] mt-[100px] md:mt-[70px] justify-end">
					<button className="hidden md:block w-[149px]  px-[15px] py-[10px] text-[#4C4C4C] bg-[#D0D0D0] rounded-[5px] font-medium text-[20px]">
						Артка
					</button>
					<button className="w-[320px] md:w-[149px] px-[15px] py-[10px] text-[#fff] bg-blue-600 rounded-[5px] font-medium text-[20px]">
						Алдыга
					</button>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
