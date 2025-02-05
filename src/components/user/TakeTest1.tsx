'use client'
import React from 'react'
import TakeTest from '../UI/TakeTest'
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import useTestStore from '@/store/useTestStore';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';
const TakeTest1 = () => {
  useAxiosInterceptors();
  const { testText, getSubById } = useTestStore();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[1]) : Number(slug);
  useEffect(() => {
    getSubById(idParams);
  }, [getSubById, idParams]);
  return (
    <div className='max-w-[900px] mx-auto'><TakeTest takeTestData={testText}/></div>
  )
}

export default TakeTest1