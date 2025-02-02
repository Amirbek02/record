import React from "react";
import TestCarouselCard from "@/components/UI/TestCarouselCard";
import Link from "next/link";

type Props = {
	id: number;

	test_category_name: string;
};

const TestListIn = ({
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
					Негизги тест
				</p>
				<div className="grid md:grid-cols-2 grid-col-1 gap-4  mx-auto w-[325px] sm:w-[600px] lg:w-[900px]">
					{tests.map((testi) => (
						<Link key={testi.id} href={`/in/all-tests/${testi.id}`}>
							<TestCarouselCard
								testTitle={testi.test_category_name}
								testDescriptionTitle={""}
								description={""}
								imgSrc={"/images/test.png"}
								href="#"
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default TestListIn;
