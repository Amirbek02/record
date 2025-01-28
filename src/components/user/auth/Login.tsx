'use client';
import useAuthStore from '@/lib/store/authStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { formLoginSchema, TFormLoginValues } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@/components/UI/button';
import { FormInput } from './form-input';

interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
}

const Login: React.FC<Props> = ({ onClose }) => {
  const { login, error } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  // React.useEffect(() => {
  //   const loginWithToken = async (token: string) => {
  //     try {
  //       await login({ token } as unknown as ILoginData);
  //       router.push('/in');
  //     } catch (err) {
  //       console.error('Токен менен кирүү учурунда ката кетти:', err);
  //     }
  //   };

  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     try {
  //       const decoded = jwtDecode(token);
  //       if (decoded.exp && decoded.exp * 1000 > Date.now()) {
  //         loginWithToken(token);
  //       } else {
  //         console.warn('Token expired, redirecting...');
  //         router.push('/sign-in');
  //       }
  //     } catch (error) {
  //       console.error('Invalid token format:', error);
  //       router.push('/sign-in');
  //     }
  //   } else {
  //     router.push('/sign-in');
  //   }
  // }, [login, router]);

  console.log('login error', error);

  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      });
      console.log('response sdkjfhklasjhdflkj' + response);

      if (!error) {
        toast.error('Катталуу ийгиликтүү 📝. Почтаңызды тастыктаңыз', {
          icon: '✅',
        });
        router.push('/in');
      }

      onClose?.();
    } catch {
      return toast.error('E-Mail же сырсөз туура эмес', {
        icon: '❌',
      });
    }
  };

  const inputClass =
    'font-montserrat font-[400] placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px] xl:w-[500px]  mb-[20px] text-[16px] leading-[20px]';
  return (
    <div className="flex justify-center items-center flex-col w-[360px] mm:w-auto">
      <Link href="/">
        <div className="pt-[26px] xl:pt-[120px] pb-[82px] xl:pb-[40px]">
          <Image src="/icons/record-logo.svg" width={290} height={95} alt="Sign In" />
        </div>
      </Link>
      <h1 className="hidden xl:block font-montserrat font-medium text-[36px] leading-[44px] tracking-[2%] text-[rgb(76,76,76)] pb-[75px]">
        Кош келдиңиз!
      </h1>
      <FormProvider {...form}>
        <form
          className="flex justify-center items-center flex-col relative"
          onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start">
            <label
              htmlFor="email"
              className="font-montserrat font-[400] text-[16px] leading-[20px] pb-[6px] text-[rgb(76,76,76)]">
              Телефон номери
            </label>
            <FormInput className={inputClass} placeholder="Email" name="email" required />
            <div className="relative w-[270px] mm:w-[356px] xl:w-[500px]">
              <FormInput
                type={showPassword ? 'text' : 'password'}
                className={inputClass}
                placeholder="Сыр сөз"
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[22px] right-[25px] transform -translate-y-1/2 self-center text-[rgba(0,0,0,0.44)] w-[20px] h-[14px]">
                {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center w-[270px] mm:w-[360px] xl:w-[500px] pb-[32px]">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="hidden"
              />
              <div className="w-[20px] h-[20px] border rounded-[4px] flex items-center justify-center">
                {isChecked && (
                  <span className="text-[14px] font-bold text-[rgba(0,0,0,0.6)]">✔</span>
                )}
              </div>
              <span className="font-roboto text-[14px] font-[400] leading-[16px] text-[rgba(0,0,0,0.6)] pl-[17px]">
                Эстеп кал
              </span>
            </label>
            <Link
              href="#"
              className="font-roboto text-[14px] font-[400] leading-[16px] text-[rgb(46,48,149)] underline">
              Сыр сөзүңүздү унуттуңузбу?
            </Link>
          </div>

          {error && <h3 className="font-montserrat text-[12px] text-red-500 mb-[20px]">{error}</h3>}

          <Button
            disabled={form.formState.isSubmitting}
            className="mm:rounded-[5px] xl:rounded-[12px] h-[45px] mm:h-[56px] mm:w-[356px] xl:w-[500px] mb-[14px] xl:mb-[114px] bg-customGray xl:bg-customBlue">
            Кирүү
          </Button>

          <div className="flex flex-col items-center pb-[175px]">
            <div className="flex items-center text-[rgb(163,163,174)] font-montserrat text-[16px] font-[500] leading-[20px] pb-[32px]">
              <span className="flex-1 border-t border-[rgb(163,163,174)]"></span>
              <p className="px-[16px]">Же</p>
              <span className="flex-1 border-t border-[rgb(163,163,174)]"></span>
            </div>
            <div className="flex justify-between w-[270px] mm:w-[360px] xl:w-[500px] pb-[32px]">
              <button className="flex items-center border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] px-[10px] py-[15px]">
                <Image src="/icons/iphone.svg" width={24} height={24} alt="iCloud" />
                <span className="pl-[10px] text-[rgb(163,163,174)] text-[16px] font-[400]">
                  icloud аркылуу
                </span>
              </button>
              <button className="flex items-center border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] px-[10px] py-[15px]">
                <Image src="/icons/google.svg" width={24} height={24} alt="Google" />
                <span className="pl-[10px] text-[rgb(163,163,174)] text-[16px] font-[400]">
                  Google аркылуу
                </span>
              </button>
            </div>
            <Link
              href="#"
              className="text-[rgb(46,48,149)] font-roboto text-[20px] font-normal underline">
              Катталуу
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
