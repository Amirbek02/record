'use client';
import React from 'react';
import MainPage from '@/components/user/UserIn/mainpage/MainPage';
import { useRouter } from 'next/navigation';
import useAuthStore, { IRegisterData } from '@/lib/store/authStore';

const Homepage = () => {
  // const { register } = useAuthStore();
  // const router = useRouter();
  // React.useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     loginWithToken(token);
  //   } else {
  //     router.push('/sign-up');
  //   }
  // }, []);

  // const loginWithToken = async (token: string) => {
  //   try {
  //     await register({ token } as IRegisterData);
  //     router.push('/in');
  //   } catch (err) {
  //     console.error('Error during token login:', err);
  //   }
  // };
  return (
    <section>
      <MainPage />
    </section>
  );
};

export default Homepage;
