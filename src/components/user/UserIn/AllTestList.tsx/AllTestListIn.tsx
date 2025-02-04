'use client';
import React, { useEffect } from 'react';
import TestListIn from './TestListIn';
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
      <TestListIn categories={categories} subcategories={subcategories} />
    </>
  );
};

export default AllTestListIn;
