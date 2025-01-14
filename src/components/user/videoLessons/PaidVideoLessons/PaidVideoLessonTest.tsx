/** @format */
"use client"
import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/UI/card"
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group"
import Image, { StaticImageData } from "next/image"
import QuestionImage from "@/../public/images/question.png"
import { Clock } from "lucide-react"

interface Question {
	id: number
	trueVariant: string
	image: StaticImageData
}

interface TestSession {
	id: number
	department: number
	subject: string
	totalTime: number
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
				trueVariant: "A",
				image: QuestionImage,
			},
			{
				id: 344,
				trueVariant: "A",
				image: QuestionImage,
			},
			{
				id: 334,
				trueVariant: "A",
				image: QuestionImage,
			},
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

		console.log("Test completed:", finalAnswers)

		// Clear local storage
		localStorage.removeItem(answersKey)
		localStorage.removeItem(`test-session-${testData.id}`)
	}

	return (
		<div className="w-full max-w-[1440px] mx-auto p-4">
			<h1 className="md:hidden text-center text-gray-500 font-semibold mb-4 text-lg md:text-2xl">
				Сынамык тестке кош келдиңиз!
			</h1>
			<h1 className="md:hidden text-center text-red font-semibold mb-4 text-xl md:text-2xl">
				ЖРТ га даярдоо
			</h1>

			<div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-center items-center md:justify-between">
				<h1 className="text-xl md:text-2xl font-semibold ">
					{testData.subject}
				</h1>
				<div className="flex flex-col items-center mb-6 max-w-[200px] ">
					<Clock size={82} strokeWidth={1.25} />
					<span className="text-xl md:text-2xl font-mono">
						{formatTime(timeLeft)}
					</span>
				</div>
			</div>

			<div className="flex items-center gap-2 md:gap-4">
				<Card className="flex-1 border-none shadow-none">
					<CardContent className="p-3 md:p-6">
						<div className="flex justify-between">
							<h1 className="text-xl text-gray-700 md:text-2xl font-semibold">
								Тапшырма
							</h1>
							<div className="mb-4 text-lg md:text-2xl font-medium">
								Суроо {currentQuestion + 1}/{testData.questions.length}
							</div>
						</div>
						<div className="flex flex-col lg:flex-row gap-2 md:gap-4">
							<div className="flex-1">
								<div className="whitespace-pre-line mb-4 md:mb-6 text-sm md:text-xl">
									<p>
										Эгерде{" "}
										<span className="font-bold underline text-black">
											А КОЛОНКАСЫНДАГЫ
										</span>{" "}
										чоңдук чоң болсо, анда (А);
									</p>
									<p>
										Эгерде{" "}
										<span className="font-bold underline text-black">
											Б КОЛОНКАСЫНДАГЫ
										</span>{" "}
										чоңдук чоң болсо, анда (Б);
									</p>
									<p>Эгерде эки чоңдук барабар болсо, анда (В);</p>
									<p>
										Эгерде бар болгон маалымат аркылуу бул чоңдуктардын
										кайсынысы чоң экендигин, же алардын барабар экендигин
										аныктоо мүмкүн болбосо, анда (Г)
									</p>
								</div>
								<div className="flex items-center justify-center ">
									<div className="text-lg md:text-2xl font-bold lg:w-12 ">
										{currentQuestion + 1}.
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
						</div>

						<RadioGroup
							value={selectedAnswers[currentQuestion] || ""}
							onValueChange={handleAnswer}
							className="flex flex-wrap justify-center gap-8 md:gap-24 mt-6 md:mt-8"
						>
							{["А", "Б", "В", "Г"].map(variant => (
								<div key={variant} className="flex flex-col ">
									<label
										htmlFor={`option-${variant}-${currentQuestion}`}
										className="text-lg md:text-2xl font-semibold"
									>
										{variant}
									</label>
									<RadioGroupItem
										value={variant}
										id={`option-${variant}-${currentQuestion}`}
										className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-gray-400 data-[state=checked]:bg-black data-[state=checked]:border-black"
									/>
								</div>
							))}
						</RadioGroup>
					</CardContent>
				</Card>
			</div>

			<div className="flex flex-col-reverse justify-center items-center gap-2 sm:flex-row sm:justify-end mt-4 md:mt-6">
				<button
					style={{ background: "#E0E0E0", borderRadius: "5px" }}
					onClick={() => handleNavigation("prev")}
					disabled={currentQuestion === 0}
					className=" w-full sm:w-[185px] h-[56px] font-bold  text-black text-sm md:text-2xl rounded-md"
				>
					Артка
				</button>
				{currentQuestion === testData.questions.length - 1 ? (
					<button
						style={{ background: "green", borderRadius: "5px" }}
						onClick={handleFinishTest}
						disabled={!isAllAnswered}
						className="w-full sm:w-[185px] text-sm md:text-xl	font-bold text-white h-[56px] rounded-lg"
					>
						Тестти бүтүрүү
					</button>
				) : (
					<button
						style={{ background: "#2E3095", borderRadius: "5px" }}
						onClick={() => handleNavigation("next")}
						className="w-full sm:w-[185px] h-[56px] font-bold  text-white text-sm md:text-2xl bg-blue  rounded-lg"
					>
						Алдыга
					</button>
				)}
			</div>
		</div>
	)
}

export default PaidVideoLessonTest
