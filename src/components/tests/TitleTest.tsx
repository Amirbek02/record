'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import useTestStore from '@/store/useTestStore';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';
import Image from 'next/image';

interface Props {
  className?: string;
}

const TitleTest: React.FC<Props> = ({ className }) => {
  useAxiosInterceptors();
  const { getSubById, testText } = useTestStore();
  const params = useParams();
  const slug = params?.slug;

  const idParams = Array.isArray(slug) ? Number(slug[2]) : Number(slug);

  useEffect(() => {
    getSubById(idParams);
  }, [getSubById, idParams]);

  return (
    <div className={className}>
      <div>
        {testText.test_questions?.map((test) => (
          <div key={test.id}>
            <div>{test?.question_text}</div>
            <Image
              src={`${test?.question_image}`}
              alt={test.last_update_date}
              width={300}
              height={300}
            />
            <Image src={test?.question_image || ''} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleTest;
