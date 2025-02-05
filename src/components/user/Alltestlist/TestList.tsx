// 'use client';
// import React, { useEffect } from 'react';
// import TestCardNoSign from '@/components/UI/TestCardNoSign';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import useTrialTestStore from '@/store/TrialTest';
// import { Props } from '@/app/(home)/exam-test/[...slug]/page';

// const TestList = ({}: { tests: Props[]; isMainTest?: boolean }) => {
//   const params = useParams();
//   console.log('Params:', params);
//   const { test, getTest } = useTrialTestStore();

//   useEffect(() => {
//     getTest();
//   }, [getTest]);

//   const slug = params?.slug;
//   const idParams = Array.isArray(slug) ? Number(slug[0]) : undefined;

//   const subjectCategoryIds = test
//     .filter((test) => test.subject_category?.id === idParams)
//     .filter((el) => el.first_test === true);

//   const testCategory = subjectCategoryIds.find((el) => el.test_category?.test_category_name)
//     ?.test_category?.test_category_name;

//   return (
//     <div className="w-6xl mx-auto p-4 mb-8 flex justify-center">
//       <div>
//         <p className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
//           {testCategory}
//         </p>
//         <div className="grid md:grid-cols-2 grid-col-1 gap-4  mx-auto  sm:w-[600px] lg:w-[900px]">
//           {subjectCategoryIds.map((testi) => (
//             <Link key={testi.id} href={`/exam-test/${testi.id}`}>
//               <TestCardNoSign
//                 testTitle={testi.subject_category.subject_category_name}
//                 testDescriptionTitle={testi.title}
//                 description={testi.description}
//                 imgSrc={testi.background_image}
//                 href="#"
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestList;


import React from 'react';
import TestCardNoSign from '@/components/UI/TestCardNoSign';
import Link from 'next/link';
import { Category, SubjectCategory } from '@/types/categories';

const TestListIn = ({
  categories = [],
  subcategories = [],
}: {
  categories: Category[] | undefined;
  subcategories: SubjectCategory[] | undefined;
}) => {
  console.log(subcategories);

  return (
    <div className="max-w-6xl mx-auto p-4 mb-8 flex justify-center">
      <div>
        {categories.map((category) => (
          <p
            key={category.id}
            className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
            {category.test_category_name}
          </p>
        ))}

        <div className="grid md:grid-cols-2 grid-col-1 gap-4  mx-auto w-[325px] sm:w-[600px] lg:w-[900px]">
          {subcategories.map((subCategory) => (
            <Link key={subCategory.id} href={`/exam-test/${subCategory.id}`}>
              <TestCardNoSign
                testTitle={subCategory.subject_category_name}
                testDescriptionTitle={''}
                imgSrc={'/images/test.png'}
                href='/exam-test/${subCategory.id}'
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestListIn;

