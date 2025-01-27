'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Button } from '../../UI/button';
import useAuthStore from '@/lib/store/authStore';
import { formRegisterSchema, TFormRegisterValues } from './schema';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FormInput } from './form-input';

interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
}

export const Register: React.FC<Props> = ({ onClose }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { register } = useAuthStore();
  const router = useRouter();
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      password_confirm: '',
      user_status: '',
      first_name: '',
      last_name: '',
      paid: '',
    },
  });
  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await register({
        email: data.email,
        password: data.password,
        password_confirm: data.password_confirm,
        user_status: 'Менеджер',
        first_name: data.first_name,
        last_name: data.last_name,
        paid: 'Не оплачено',
      });

      toast.error('Катталуу ийгиликтүү 📝. Почтаңызды тастыктаңыз', {
        icon: '✅',
      });

      router.push('/verification');

      onClose?.();
    } catch (error) {
      return toast.error('E-Mail же сырсөз туура эмес', {
        icon: '❌',
      });
    }
  };
  const inputClass =
    'font-montserrat font-[400] placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px] xl:w-[500px]  mb-[20px] text-[16px] leading-[20px]';
  const additionalClass =
    'xl:w-[238px] font-montserrat font-[400] placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px]    mb-[20px] text-[16px] leading-[20px]';

  return (
    <div className="flex justify-center items-center flex-col w-full h-auto ">
      <Link href="/">
        <div className="pt-[26px] xl:pt-[120px] pb-[82px] xl:pb-[40px]">
          <Image src="/icons/record-logo.svg" width={290} height={95} alt="Sign In" />
        </div>
      </Link>
      <FormProvider {...form}>
        <h1 className="font-montserrat text-[rgb(85,87,87)] font-[500] text-[28px] xl:text-[32px] leading-[34px] xl:leading-[39px] pt-[82px] xl:pt-[76px]  pb-[40px]  ">
          Катталуу
        </h1>
        <form
          className="flex justify-center items-center flex-col relative"
          onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center flex-col xl:flex-row">
            <FormInput
              className={` ${additionalClass} xl:mr-[25px] `}
              name="first_name"
              placeholder="Аты"
              required
            />
            <FormInput className={additionalClass} placeholder="Фамилия" name="last_name" />
          </div>
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
            <FormInput
              className={inputClass}
              name="password_confirm"
              placeholder="Сыр сөздү кайталоо"
              type={showConfirmPassword ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-[90px] right-[25px] transform -translate-y-1/2 self-center text-[rgba(0,0,0,0.44)] w-[20px] h-[14px]">
              {showConfirmPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
            </button>
          </div>
          <div className="justify-center items-center flex-col pb-[10px] hidden xl:block ">
            <div className="flex pb-[32px] items-center justify-between w-[270px] mm:w-[360px] xl:w-[500px]">
              <div className="box-border border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] xl:rounded-[12px] ">
                <div className="flex justify-center items-center px-[10px] xl:px-[30px] py-[15px] xl:py-[19px] ">
                  <div className="pr-[10px] ">
                    <Image src="/icons/iphone.svg" width={24} height={24} alt="sighIn"></Image>
                  </div>
                  <p className="text-[rgb(163,163,174)] font-montserrat text-[14px] xl:text-[16px] font-[400] leading-[17px] xl:leading-[20px] xl:pr-[20px]">
                    icloud аркылуу
                  </p>
                </div>
              </div>
              <div className="box-border border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] xl:rounded-[12px]">
                <div className="flex justify-center items-center px-[10px] xl:px-[30px] py-[15px] xl:py-[19px]">
                  <div className="pr-[10px] ">
                    <Image src="/icons/google.svg" width={24} height={24} alt="google"></Image>
                  </div>
                  <p className="text-[rgb(163,163,174)] font-montserrat ext-[14px] xl:text-[16px] font-[400] leading-[17px] xl:leading-[20px] xl:pr-[20px]">
                    Google аркылуу{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-[22px] text-[rgb(163,163,174)] font-montserrat text-[16px] font-[500] leading-[20px] tracking-[2%] flex items-center">
              <span className="flex-1 border-t border-[rgb(163,163,174)] w-[100px]  mm:w-[150px] xl:w-[160px] pr-[16px] "></span>
              <p className="px-[16px] ">Же</p>
              <span className="flex-1 border-t border-[rgb(163,163,174)]  w-[100px] mm:w-[150px] xl:w-[160px] pl-[16px] "></span>
            </div>
          </div>
          <Button
            loading={form.formState.isSubmitting}
            className="mm:rounded-[5px] xl:rounded-[12px] h-[45px] mm:h-[56px] mm:w-[356px] xl:w-[500px] mb-[14px] xl:mb-[114px] bg-customGray xl:bg-customBlue">
            Катталуу
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
