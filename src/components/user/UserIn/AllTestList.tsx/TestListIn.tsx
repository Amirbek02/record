import React from "react";
import TestCarouselCard from "@/components/UI/TestCarouselCard";
import Link from "next/link";
import { Category, SubjectCategory } from "@/types/categories";

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
            className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4"
          >
            {category.test_category_name}
          </p>
        ))}

        <div className="grid md:grid-cols-2 grid-col-1 gap-4  mx-auto w-[325px] sm:w-[600px] lg:w-[900px]">
          {subcategories.map((subCategory) => (
            <Link key={subCategory.id} href={`/in/all-tests/${subCategory.id}`}>
              <TestCarouselCard
                testTitle={subCategory.subject_category_name}
                testDescriptionTitle={""}
                description={""}
                imgSrc={"/images/test.png"}
                href={"/in/all-tests/${subCategory.id}"}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestListIn;
