"use client";
import { Accordion } from "@/components/UI/accordion";
import { AccordionContent, AccordionItem } from "@radix-ui/react-accordion";
import React, { useState } from "react";
import pensil from "../../../../public/icons/pensil.svg";
import Image from "next/image";
import { RefreshCw, Trash2 } from "lucide-react";
import { RxTriangleUp } from "react-icons/rx";

const AboutStudent = () => {
	const [openItem, setOpenItem] = useState<string | undefined>(undefined);
	const [nestedOpenItem, setNestedOpenItem] = useState<string | undefined>(
		undefined
	);

	const handleToggleAccordion = (value: string) => {
		setOpenItem((prev) => (prev === value ? undefined : value));
	};

	const handleToggleNestedAccordion = (value: string) => {
		setNestedOpenItem((prev) => (prev === value ? undefined : value));
	};

	return (
		<div className="w-[90%] max-w-[1440px] mx-auto py-[30px]">
			<div className="flex justify-between items-center w-full bg-[#F6EEFF] h-[59px] rounded-[10px] px-[32px] mb-[16px]">
				<h1 className="font-semibold text-[14px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-black underline">
					Катталган окуучулар жөнүндө маалымат
				</h1>
				<div className="flex gap-[10px] sm:gap-[16px] ml-[10px] md:mr-0 lg:mr-[200px]">
					<Image src={pensil} alt="edit" width={16} height={16} />
					<RefreshCw
						strokeWidth={1}
						width={20}
						height={20}
						className="transform rotate-90"
					/>
					<Trash2 width={20} height={20} />
				</div>
			</div>
			<Accordion
				type="single"
				collapsible
				className="w-full flex flex-col gap-[16px]"
				value={openItem}
				onValueChange={setOpenItem}>
				{Array(10)
					.fill(false)
					.map((el, index) => {
						const itemValue = `item-${index + 1}`;
						const value = `item-${itemValue + 0.1}`;
						return (
							<AccordionItem value={itemValue} key={index}>
								<div className="flex items-center w-full bg-[#F6EEFF] h-[86px] rounded-[10px] px-[32px]">
									<h1 className="text-16px sm:text-[24px] text-black">
										{index + 1}
									</h1>
									<input
										type="checkbox"
										className="w-[18px] h-[18px] ml-[24px] md:ml-[54px] mr-[28px]"
									/>
									<h1 className="font-semibold text-[14px] sm:text-[22px] md:text-[32px] text-[#484848]">
										Айдана Асылбекова
									</h1>
									<div className="flex gap-[10px] sm:gap-[16px] ml-[10px] sm:ml-[25px]">
										<Image
											src={pensil}
											alt="edit"
											width={16}
											height={16}
										/>
										<RefreshCw
											strokeWidth={1}
											width={20}
											height={20}
											className="transform rotate-90"
										/>
										<Trash2 width={20} height={20} />
									</div>
									<RxTriangleUp
										width={20}
										height={20}
										className={` w-[40px] h-[40px] ml-auto cursor-pointer transition-all duration-400 ease-in-out ${
											openItem === itemValue
												? "transform rotate-180"
												: "transform rotate-90"
										}`}
										onClick={() => handleToggleAccordion(itemValue)}
									/>
								</div>
								<AccordionContent className="flex justify-end">
									<div className="w-[514px]   py-[20px] px-[20px] bg-[#F6EEFF]  mt-[16px] rounded-[10px] ">
										<Accordion
											type="single"
											collapsible
											value={nestedOpenItem}
											onValueChange={setNestedOpenItem}>
											<div>
												<AccordionItem value={value}>
													<div className="flex items-center">
														<h1 className="text-[24px] md:text-[32px] ">
															Тест
														</h1>
														<div className="flex gap-[16px] ml-[25px]">
															<Image
																src={pensil}
																alt="edit"
																width={16}
																height={16}
															/>
															<RefreshCw
																strokeWidth={1}
																width={20}
																height={20}
																className="transform rotate-90"
															/>
															<Trash2 width={20} height={20} />
														</div>
														<RxTriangleUp
															width={20}
															height={20}
															className={` w-[40px] h-[40px] ml-[48px] cursor-pointer transition-all duration-400 ease-in-out ${
																nestedOpenItem === value
																	? "transform rotate-180"
																	: "transform rotate-90"
															}`}
															onClick={() =>
																handleToggleNestedAccordion(
																	value
																)
															}
														/>
													</div>
													<AccordionContent className="flex flex-col gap-[20px] mt-[25px] mx-auto">
														{Array(5)
															.fill(false)
															.map((el, index) => (
																<div
																	key={index}
																	className="w-[100%] h-[76px] rounded-[10px] flex items-center transition-all duration-400 ease-in-out group hover:bg-blue-600"
																	style={{
																		boxShadow:
																			"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
																	}}>
																	<h1 className="text-[20px] font-semibold ml-[20px] text-blue-600 group-hover:text-[#ffff]">
																		Биология
																	</h1>
																</div>
															))}
													</AccordionContent>
												</AccordionItem>
											</div>
										</Accordion>
									</div>
								</AccordionContent>
							</AccordionItem>
						);
					})}
			</Accordion>
		</div>
	);
};

export default AboutStudent;
