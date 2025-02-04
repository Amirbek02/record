// 'use client'
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import userInTests from "@/store/userInTests";
// import { useParams, useRouter } from "next/navigation";

// const ExamplePage = () => {
//   const router = useRouter();
//   const { test, getTests } = userInTests();
//   const [selectedTest, setSelectedTest] = useState<number | null>(null);

//   useEffect(() => {
//     getTests();
//   }, [getTests]);

// const ExamplePage: React.FC<ExamplePageProps> = ({
//   testId,
//   sectionTitle,
//   instructionsTitle,
//   comparisonDetails,
//   additionalDetails,
//   backButtonText,
//   startButtonText,
// }) => {
//   const { testt,  getSubById } = userInTests();
// const params = useParams();
// const slug = params?.slug;
// const idParams = Array.isArray(slug) ? Number(slug[1]) : Number(slug);
// console.log(idParams);

// console.log(testt,'TESTTTTTT')
// React.useEffect(() => {
//   getSubById(idParams);
// }, [getSubById,idParams]);
//   return (

//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">Тест тандоо</h1>

//       {/* Тест ID тандаган кнопкалар */}
//       <div className="flex flex-wrap gap-4 justify-center">
//         {testComponents.map(({ id }) => (
//           <button
//             key={id}
//             onClick={() => setSelectedTest(id)}
//             className={`border px-4 py-2 rounded-md ${
//               selectedTest === id ? "bg-blue-600 text-white" : "bg-gray-200"
//             }`}
//           >
//             Тест {id}
//           </button>
//         ))}
//       </div>

//       <div className="flex gap-5 justify-end mt-8">
//         <button className="border text-xs sm:text-xl font-semibold bg-[#E0E0E0] hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-[10px]">
//           {backButtonText}
//         </button>
//         <Link href={`/in/all-tests/${testt?.test_category?.id}/${testt?.subject_category?.id}/${testt?.id}/4-${testt?.id}`}>
//         <button className="border text-xs sm:text-xl font-semibold text-white bg-blue-800  hover:bg-sky-800 w-full md:w-[245px] py-2 rounded-[10px]">
//           {startButtonText}
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
