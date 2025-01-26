import React from "react";
import TestCardNoSign from "@/components/UI/TestCardNoSign";
import Link from "next/link";

type Props = {
	id: number;
	title: string;
	description: string;
	tag: string;
	imgSrc: string;
	pathName: string;
};

const TestList = ({
	tests,
	isMainTest,
}: {
	tests: Props[];
	isMainTest?: boolean;
}) => {
	return (
		<div className="max-w-6xl mx-auto p-4 mb-8 flex justify-center">
			<div>
				<p className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
					{isMainTest ? "Негизги тест" : "Предметтик тест"}
				</p>
				<div className="grid md:grid-cols-2 grid-col-1 gap-4  mx-auto ">
					{tests.map((testi) => (
						<Link key={testi.id} href={testi.pathName}>
							<TestCardNoSign
								testTitle={testi.title}
								testDescriptionTitle={testi.tag}
								description={testi.description}
								imgSrc={testi.imgSrc}
								href="#"
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default TestList;
