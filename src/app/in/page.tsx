'use client';
import React from 'react';
import MainPage from '@/components/user/UserIn/mainpage/MainPage';
import { useRouter } from 'next/navigation';
import useAuthStore, { IVerificationResponse } from '@/lib/store/authStore';
import { jwtDecode } from 'jwt-decode';

const Homepage = () => {
  const { verification } = useAuthStore();
  const router = useRouter();

  const loginWithToken = React.useCallback(
    async (token: string) => {
      try {
        await verification({ token } as IVerificationResponse);
        router.push('/in');
      } catch (err) {
        console.error('Error during token login:', err);
      }
    },
    [verification, router],
  );

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp && decoded.exp * 1000 > Date.now()) {
          loginWithToken(token);
        } else {
          console.warn('Token expired, redirecting...');
          router.push('/sign-up');
        }
      } catch (error) {
        console.error('Invalid token format:', error);
        router.push('/sign-up');
      }
    } else {
      router.push('/sign-up');
    }
  }, [loginWithToken, router]);

  return (
    <section>
      <MainPage />
    </section>
  );
};

export default Homepage;
