//ЖРТ га даярдоо  Сынамык тестке кош келдиңиз! 1
'use client';
import CustomButton from '../UI/CustomButton';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import useTestStore from '@/store/useTestStore';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';
import Link from 'next/link';

const TakeTest = () => {
  useAxiosInterceptors();
  const { fetchTests, getSubById, testText } = useTestStore();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[1]) : Number(slug);

  useEffect(() => {
    fetchTests();
    const adf = async () => {
      getSubById(idParams);
    };
    adf();
  }, [idParams, getSubById, fetchTests]);

  return (
    <div>
      <div className="flex justify-center items-center flex-col px-[15px] small:px-[35px] pb-[120px] pt-[40px]">
        <p className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] lg:hidden">
          {testText?.test_category?.test_category_name || 'Загрузка...'}
        </p>

        <h2 className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] pb-[24px] lg:hidden">
          {testText?.title || 'Заголовок теста'}
        </h2>
        <p className="max-w-[1000px]">{testText?.description || 'Описание теста'}</p>

        <div className="lg:h-[60vh] w-full">
          <div className=" h-full  lg:flex lg:items-end lg:justify-end ">
            <Link href={`/in/all-tests/${testText?.test_category?.id}/`}>
              <CustomButton
                title="Артка"
                containerStyles="hidden lg:block bg-[rgba(224,224,224,1)] h-[40px] small:h-[50px] w-[220px] lg:w-[185px]  small:rounded-[5px] lg:self-end mr-[16px]"
                textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgba(76,76,76,1)]"
              />
            </Link>
            <Link
              href={`/in/all-tests/${testText?.subject_category?.id}/${testText?.id}/${testText?.id}`}>
              <CustomButton
                title="Тестти баштоо"
                containerStyles="h-[40px] small:h-[50px] w-[220px] lg:w-[218px] small:w-[360px] small:rounded-[5px] lg:self-end"
                textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgb(255,255,255)]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeTest;
