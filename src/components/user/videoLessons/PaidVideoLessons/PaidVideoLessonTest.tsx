/** @format */
"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/UI/button"
import { Card, CardContent } from "@/components/UI/card"
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group"
import Image, { StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import QuestionImage from "@/../public/images/question.png"

interface Question {
	id: number
	question: string
	trueVariant: string
	image?: StaticImageData
}

interface TestSession {
	id: number
	department: number
	subject: string
	totalTime: number // Added total time for the entire test
	questions: Question[]
}

interface SessionState {
	currentQuestionIndex: number
	timeLeft: number
	startTime: number
	isActive: boolean
}

interface TestAnswers {
	sessionId: number
	answers: Record<number, string>
	startTime: number
	lastUpdated: number
}

const PaidVideoLessonTest = () => {
	const [testData, setTestData] = useState<TestSession>({
		id: 223,
		department: 1,
		subject: "Математика",
		totalTime: 1800, // 30 minutes for entire test
		questions: [
			{
				id: 3434,
				question: `Эгерде A КОЛОНКАСЫНДАГЫ чондук чон болсо, анда (A);
Эгерде Б КОЛОНКАСЫНДАГЫ чондук чон болсо, анда (Б);
Эгерде эки чондук барабар болсо, анда (В);
Эгерде бар болгон маалымат аркылуу буд чондуктардын кайсынысы чон экендигин, же алардын барабар экендигин аныктоо мумкун болбосо, анда (Г).`,
				trueVariant: "A",
				image: QuestionImage,
			},
			{
				id: 344,
				question: `Эгерде A КОЛОНКАСЫНДАГЫ чондук чон болсо, анда (A);
Эгерде Б КОЛОНКАСЫНДАГЫ чондук чон болсо, анда (Б);
Эгерде эки чондук барабар болсо, анда (В);
Эгерде бар болгон маалымат аркылуу буд чондуктардын кайсынысы чон экендигин, же алардын барабар экендигин аныктоо мумкун болбосо, анда (Г).`,
				trueVariant: "A",
				image: QuestionImage,
			},
			{
				id: 334,
				question: `Эгерде A КОЛОНКАСЫНДАГЫ чондук чон болсо, анда (A);
Эгерде Б КОЛОНКАСЫНДАГЫ чондук чон болсо, анда (Б);
Эгерде эки чондук барабар болсо, анда (В);
Эгерде бар болгон маалымат аркылуу буд чондуктардын кайсынысы чон экендигин, же алардын барабар экендигин аныктоо мумкун болбосо, анда (Г).`,
				trueVariant: "A",
				image: QuestionImage,
			},
			// ... other questions
		],
	})

	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [timeLeft, setTimeLeft] = useState(0)
	const [selectedAnswers, setSelectedAnswers] = useState<
		Record<number, string>
	>({})
	const [isAllAnswered, setIsAllAnswered] = useState(false)

	useEffect(() => {
		const answeredCount = Object.keys(selectedAnswers).length
		setIsAllAnswered(answeredCount === testData.questions.length)
	}, [selectedAnswers, testData.questions.length])

	// Initialize or load session state
	useEffect(() => {
		const sessionKey = `test-session-${testData.id}`
		const answersKey = `test-answers-${testData.id}`

		const savedSession = localStorage.getItem(sessionKey)
		const savedAnswers = localStorage.getItem(answersKey)

		if (savedSession) {
			const session: SessionState = JSON.parse(savedSession)
			setCurrentQuestion(session.currentQuestionIndex)

			// Calculate remaining time based on when the test was started
			const elapsedTime = Math.floor((Date.now() - session.startTime) / 1000)
			const remainingTime = Math.max(0, testData.totalTime - elapsedTime)
			setTimeLeft(remainingTime)
		} else {
			// Initialize new session
			const initialState: SessionState = {
				currentQuestionIndex: 0,
				timeLeft: testData.totalTime,
				startTime: Date.now(),
				isActive: true,
			}
			localStorage.setItem(sessionKey, JSON.stringify(initialState))
			setTimeLeft(testData.totalTime)
		}

		if (savedAnswers) {
			const answers: TestAnswers = JSON.parse(savedAnswers)
			setSelectedAnswers(answers.answers)
		}
	}, [testData.id, testData.totalTime])

	// Save session state
	useEffect(() => {
		const sessionKey = `test-session-${testData.id}`
		const session: SessionState = {
			currentQuestionIndex: currentQuestion,
			timeLeft: timeLeft,
			startTime:
				JSON.parse(localStorage.getItem(sessionKey) || "{}").startTime ||
				Date.now(),
			isActive: timeLeft > 0,
		}
		localStorage.setItem(sessionKey, JSON.stringify(session))
	}, [currentQuestion, timeLeft, testData.id])

	// Save answers separately
	useEffect(() => {
		const answersKey = `test-answers-${testData.id}`
		const answers: TestAnswers = {
			sessionId: testData.id,
			answers: selectedAnswers,
			startTime: JSON.parse(
				localStorage.getItem(`test-session-${testData.id}`) || "{}"
			).startTime,
			lastUpdated: Date.now(),
		}
		localStorage.setItem(answersKey, JSON.stringify(answers))
	}, [selectedAnswers, testData.id])

	// Timer effect
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => {
				if (prev <= 0) {
					clearInterval(timer)
					// Handle test completion
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
	}

	const handleAnswer = (value: string) => {
		setSelectedAnswers(prev => ({
			...prev,
			[currentQuestion]: value,
		}))
	}

	const handleNavigation = (direction: "prev" | "next") => {
		const newIndex =
			direction === "prev"
				? Math.max(0, currentQuestion - 1)
				: Math.min(testData.questions.length - 1, currentQuestion + 1)
		setCurrentQuestion(newIndex)
	}

	const handleFinishTest = () => {
		// Get the final answers from localStorage
		const answersKey = `test-answers-${testData.id}`
		const finalAnswers = JSON.parse(localStorage.getItem(answersKey) || "{}")

		// Here you can add the logic to submit to backend
		console.log("Test completed:", finalAnswers)

		// Clear local storage
		localStorage.removeItem(answersKey)
		localStorage.removeItem(`test-session-${testData.id}`)

		// Add your navigation logic here
		// For example: router.push('/test-results')
	}

	return (
		<div className="w-full max-w-[1440px] mx-auto p-4">
			<h1 className="text-center mb-4 text-xl md:text-2xl">
				Сынамык тестке кош келдиңиз!
			</h1>
			<h1 className="text-center text-red-500 font-semibold mb-4 text-xl md:text-2xl">
				ЖРТ га даярдоо
			</h1>

			<div className="flex justify-between items-center mb-6">
				<h1 className="text-xl md:text-2xl font-semibold">
					{testData.subject}
				</h1>
			</div>

			<div className="flex flex-col items-center mb-6">
				<svg
					className="w-8 h-8 md:w-12 md:h-12 mb-2 animate-spin-slow"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 6v6l4 2" />
				</svg>
				<span className="text-xl md:text-2xl font-mono">
					{formatTime(timeLeft)}
				</span>
			</div>

			<div className="flex items-center gap-2 md:gap-4">
				<button
					onClick={() => handleNavigation("prev")}
					disabled={currentQuestion === 0}
					className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors"
				>
					<ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
				</button>

				<Card className="flex-1 border-none shadow-none">
					<CardContent className="p-3 md:p-6">
						<div className="mb-4 text-lg md:text-xl font-medium">
							Суроо {currentQuestion + 1}/{testData.questions.length}
						</div>
						<div className="flex flex-col lg:flex-row gap-2 md:gap-4">
							<div className="text-lg md:text-xl font-bold lg:w-12">
								{currentQuestion + 1}.
							</div>

							<div className="flex-1">
								<div className="whitespace-pre-line mb-4 md:mb-6 text-sm md:text-base">
									{testData.questions[currentQuestion].question}
								</div>

								{testData.questions[currentQuestion].image && (
									<div className="relative w-full aspect-[4/3] max-h-[180px] md:max-h-[220px]">
										<Image
											src={testData.questions[currentQuestion].image}
											alt="Question visualization"
											fill
											className="object-contain"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											priority
										/>
									</div>
								)}
							</div>
						</div>

						<RadioGroup
							value={selectedAnswers[currentQuestion] || ""}
							onValueChange={handleAnswer}
							className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6 md:mt-8"
						>
							{["А", "Б", "В", "Г"].map(variant => (
								<div key={variant} className="flex items-center space-x-2">
									<RadioGroupItem
										value={variant}
										id={`option-${variant}-${currentQuestion}`}
										className="w-4 h-4 md:w-5 md:h-5"
									/>
									<label
										htmlFor={`option-${variant}-${currentQuestion}`}
										className="text-lg md:text-xl font-semibold"
									>
										{variant}
									</label>
								</div>
							))}
						</RadioGroup>
					</CardContent>
				</Card>

				<button
					onClick={() => handleNavigation("next")}
					disabled={currentQuestion === testData.questions.length - 1}
					className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors"
				>
					<ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
				</button>
			</div>

			<div className="flex flex-col-reverse justify-center items-center gap-2 sm:flex-row sm:justify-end mt-4 md:mt-6">
				<button
					style={{ background: "#E0E0E0" }}
					onClick={() => handleNavigation("prev")}
					disabled={currentQuestion === 0}
					className=" w-full sm:w-[185px] h-[56px] font-bold  text-black text-sm md:text-2xl rounded-md"
				>
					Артка
				</button>
				{currentQuestion === testData.questions.length - 1 ? (
					<button
						onClick={handleFinishTest}
						disabled={!isAllAnswered}
						className="w-full sm:w-[185px] text-sm md:text-2xl	font-bold text-white h-[56px] rounded-md"
					>
						Тестти бүтүрүү
					</button>
				) : (
					<button
						style={{ background: "#2E3095" }}
						onClick={() => handleNavigation("next")}
						className="w-full sm:w-[185px] h-[56px] font-bold  text-white text-sm md:text-2xl bg-blue  rounded-md"
					>
						Алдыга
					</button>
				)}
			</div>
		</div>
	)
}

export default PaidVideoLessonTest
