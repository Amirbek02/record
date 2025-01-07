/** @format */
"use client"
import React, { useState, useRef } from "react"
import { Card, CardContent } from "@/components/UI/card"
import { Button } from "@/components/UI/button"
import { PlayCircle, Maximize2 } from "lucide-react"

interface IPaidVideoPlayer {
	title: string
	lessonNumber: number
	subject: string
	thumbnailUrl?: string
}

const PaidVideoPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	const videoLesson: IPaidVideoPlayer = {
		title: "Математика боюнча 2 - видео сабакка кош келиңиз!",
		lessonNumber: 1,
		subject: "Математика",
		thumbnailUrl: "/video/thumbnail.png",
	}

	const handlePlayClick = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
			} else {
				videoRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handleVideoEnd = () => {
		setIsPlaying(false)
	}

	const handleFullscreen = () => {
		if (videoRef.current) {
			if (!isFullscreen) {
				if (videoRef.current.requestFullscreen) {
					videoRef.current.requestFullscreen()
				}
				setIsFullscreen(true)
			} else {
				document.exitFullscreen()
				setIsFullscreen(false)
			}
		}
	}

	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-none shadow-none">
			{/* Title Section */}
			<div className="mb-4">
				<h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
					{`${videoLesson.lessonNumber}- бөлүм. ${videoLesson.subject}`}
				</h2>
			</div>

			{/* Video Card */}
			<Card className="w-full overflow-hidden bg-white dark:bg-gray-800 border-none shadow-none ">
				<CardContent className="p-0">
					<div className="relative group">
						{/* Video Container */}
						<div className="relative aspect-[16/9] bg-slate-900 overflow-hidden rounded-t-lg max-h-[532px]">
							<video
								ref={videoRef}
								className="w-full max-h-[532px] h-full object-cover"
								poster={videoLesson.thumbnailUrl}
								onEnded={handleVideoEnd}
								onClick={handlePlayClick}
								playsInline
							>
								<source src="/video/2.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>

							{/* Custom Play Button Overlay */}
							{!isPlaying && (
								<button
									onClick={handlePlayClick}
									className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300 group"
									aria-label="Play video"
								>
									<div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/30 group-hover:bg-white/40 transition-all duration-300">
										<PlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
									</div>
								</button>
							)}

							{/* Fullscreen Button */}
							<div className="absolute right-4 bottom-4">
								<button
									onClick={handleFullscreen}
									className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
									aria-label="Fullscreen"
								>
									<Maximize2 className="w-6 h-6" />
								</button>
							</div>
						</div>

						{/* Content Section */}
						<div className="pt-4">
							<div className="flex flex-col space-y-4">
								<p className="text-base  sm:text-xl text-gray-900 font-medium dark:text-gray-300">
									{videoLesson.title}
								</p>

								{/* Navigation Buttons */}
								<div className="flex justify-end gap-3">
									<Button
										variant="outline"
										size="lg"
										className="w-[149px] h-[56px] text-sm font-medium rounded-md bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Артка
									</Button>
									<Button
										size="lg"
										className="w-[149px] h-[56px] text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
									>
										Алдыга
									</Button>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default PaidVideoPlayer
