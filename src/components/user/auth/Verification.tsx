'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useAuthStore, { IVerificationData } from '@/store/authStore';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from './form-input';
import { Button } from '@/components/UI/button';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  onClose?: VoidFunction;
}

const Verification: React.FC<Props> = () => {
  const { verification, error } = useAuthStore();
  const router = useRouter();
  const loginWithToken = async () => {
    try {
      router.push('/in');
    } catch (err) {
      console.error('Токен менен кирүү учурунда ката кетти:', err);
    }
  };

  const token = localStorage.getItem('token');
  if (token) {
    loginWithToken();
  }

  const validationSchema = z.object({
    email: z
      .string()
      .nonempty('E-Mail талаасы бош болбош керек')
      .email('Туура эмес E-Mail форматы'),
    code: z
      .string()
      .nonempty('Код талаасы бош болбош керек')
      .min(6, 'Код 6 символдон кем болбошу керек')
      .max(6, 'Код 6 символдон ашык болбошу керек')
      .regex(/^\d+$/, 'Код цифралардан гана турушу керек'),
  });
  const form = useForm<IVerificationData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      code: '',
    },
  });
  const onSubmit = async (data: IVerificationData) => {
    try {
      await verification({ email: data.email, code: data.code });
      if (!error) {
        toast.success('Катталуу ийгиликтүү 📝.', {
          icon: '✅',
        });
        router.push('/in');
      }
    } catch (err) {
      console.error('Verification error: ', err); // Добавьте логирование ошибки
      toast.error('E-Mail же код туура эмес', {
        icon: '❌',
      });
    }
  };

  const inputClass =
    'font-montserrat font-[400] placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px] xl:w-[500px]  mb-[20px] text-[16px] leading-[20px]';
  return (
    <div className="flex justify-center items-center flex-col w-full h-auto">
      <Link href="/">
        <div className="pt-[26px] xl:pt-[120px] pb-[82px] xl:pb-[40px]">
          <Image src="/icons/record-logo.svg" width={290} height={95} alt="Sign In" />
        </div>
      </Link>

      <FormProvider {...form}>
        <form
          className="flex justify-center items-center flex-col relative"
          onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="font-montserrat text-[rgb(85,87,87)] font-[500] text-[28px] xl:text-[32px] leading-[34px] xl:leading-[39px] pt-[82px] xl:pt-[76px] pb-[40px]">
            Катталуу
          </h1>

          <FormInput className={inputClass} placeholder="Email" name="email" required />

          <FormInput className={` ${inputClass}`} name="code" placeholder="Код" required />
          {error && <h3 className="font-medium text-[12px] text-red-500 mb-[20px]">{error}</h3>}

          <Button
            disabled={form.formState.isSubmitting}
            className="mm:rounded-[5px] xl:rounded-[12px] h-[45px] mm:h-[56px] mm:w-[356px] xl:w-[500px] mb-[14px] xl:mb-[114px] bg-customGray xl:bg-customBlue">
            Катталуу
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Verification;
