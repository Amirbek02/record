'use client';
import React, { useEffect } from 'react';
import TestList from './TestList';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';
import useTestStore from '@/store/useTestStore';
const AllTestListIn = () => {
  useAxiosInterceptors();
  const { categories, getCategory, subcategories, getSubCategories } = useTestStore();

  useEffect(() => {
    getCategory();
    getSubCategories();
  }, [getCategory, getSubCategories]);
  return (
    <>
      <TestList categories={categories} subcategories={subcategories} />
    </>
  );
};

export default AllTestListIn;