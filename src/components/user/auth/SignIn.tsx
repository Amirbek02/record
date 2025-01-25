'use client';
import CustomButton from '@/components/UI/CustomButton';
import useAuthStore, { IFormData, IRegisterData } from '@/lib/store/authStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';

const SignIn = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    password_confirm: '',
    user_status: 'Менеджер',
    first_name: '',
    last_name: '',
    paid: 'Не оплачено',
  });

  const { register, isLoading, error } = useAuthStore();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  console.log('error', error);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loginWithToken(token);
    } else {
      router.push('/sign-up');
    }
  }, []);

  const loginWithToken = async (token: string) => {
    try {
      await register({ token } as IRegisterData);
      router.push('/in');
    } catch (err) {
      console.error('Error during token login:', err);
    }
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value, 'value');

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password, password_confirm, user_status, first_name, last_name, paid } =
      formData;

    if (!validateEmail(email)) {
      setErrorMessage('Электрондук почта туура эмес');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('*Сыр сөз 8 символдон кем болбош керек');
      return;
    }
    if (password !== password_confirm) {
      setErrorMessage('Сыр сөздөр дал келбейт');
      return;
    }

    try {
      await register({
        email,
        password,
        password_confirm,
        user_status,
        first_name,
        last_name,
        paid,
      });

      if (!error) {
        router.push('/verification');
      } else {
        console.log(`Ошибка: ${error || 'Неизвестная ошибка'}`);
      }
    } catch (err) {
      console.error('Ошибка регистрации:', err);
    }
  };
  const inputClass =
    'font-montserrat font-[400] box-border border-[0.6px] border-gray-300 placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px] xl:w-[500px] rounded-[4px] xl:rounded-[12px] py-[19px] pl-[15px] mb-[20px] text-[16px] leading-[20px]';
  const additionalClass =
    'xl:w-[238px] font-montserrat font-[400] box-border border-[0.6px] border-gray-300 placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px]  rounded-[4px] xl:rounded-[12px] py-[19px] pl-[15px] mb-[20px] text-[16px] leading-[20px]';

  return (
    <div className="flex justify-center items-center flex-col w-full h-auto ">
      <div className="pt-[24px] xl:pt-[120px]">
        <Image src="/icons/record-logo.svg" width={290} height={95} alt="sighIn"></Image>
      </div>

      <form className="flex justify-center items-center flex-col relative">
        <h1 className="font-montserrat text-[rgb(85,87,87)] font-[500] text-[28px] xl:text-[32px] leading-[34px] xl:leading-[39px] pt-[82px] xl:pt-[76px]  pb-[40px]  ">
          Катталуу
        </h1>
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
        <div className="flex items-center justify-center flex-col xl:flex-row">
          <input
            onChange={onchange}
            type="name"
            name="first_name"
            placeholder="Аты"
            className={` ${additionalClass} xl:mr-[25px] `}
            value={formData.first_name}
          />
          <input
            onChange={onchange}
            type="text"
            name="last_name"
            placeholder="Фамилия"
            className={additionalClass}
            value={formData.last_name}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>
        <input
          onChange={onchange}
          type="email"
          name="email"
          placeholder="email"
          className={inputClass}
          value={formData.email}
        />
        <div className="relative w-[270px] mm:w-[356px] xl:w-[500px]">
          <input
            onChange={onchange}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Сыр сөз"
            className={inputClass}
            value={formData.password}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-[27px] right-[25px] transform -translate-y-1/2 self-center text-[rgba(0,0,0,0.44)] w-[20px] h-[14px]">
            {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
          </button>
        </div>
        <h3 className="font-medium text-[12px] text-red ml-[-90px] mt-[-15px] mb-[20px]">
          {focused && formData.password.length < 8 ? '*Сыр сөз 8 символдон кем болбош керек' : ''}
        </h3>
        <input
          onChange={onchange}
          type="text"
          name="password_confirm"
          placeholder="Сыр сөздү кайталоо"
          className={inputClass}
          value={formData.password_confirm}
        />
        {errorMessage && <div className="text-red font-medium text-sm mb-4">{errorMessage}</div>}
        <CustomButton
          onClick={handleSignUp}
          title="Кирүү"
          {...(isLoading && { disabled: true })}
          containerStyles="mm:rounded-[5px] xl:rounded-[12px] h-[45px] mm:h-[56px] mm:w-[356px] xl:w-[500px] mb-[14px] xl:mb-[114px] bg-customGray xl:bg-customBlue"
          textStyles="font-[500] mm:font-[700] text-[21px] mm:text-[24px] leading-[29px] tracking-[4.5%] text-[rgb(75,75,75)] xl:text-[rgb(255,255,255)]"
        />
        <div className="flex justify-center items-center flex-col pb-[53px] xl:hidden ">
          <div className="pb-[22px] text-[rgb(163,163,174)] font-montserrat text-[16px] font-[500] leading-[20px] tracking-[2%] flex items-center">
            <span className="flex-1 border-t border-[rgb(163,163,174)] w-[100px]  mm:w-[150px] xl:w-[160px] pr-[16px] "></span>
            <p className="px-[16px] ">Же</p>
            <span className="flex-1 border-t border-[rgb(163,163,174)]  w-[100px] mm:w-[150px] xl:w-[160px] pl-[16px] "></span>
          </div>
          <div className="flex pb-[32px] items-center justify-between w-[270px] mm:w-[360px] xl:w-[500px]">
            <div className="box-border border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] xl:rounded-[12px] mr-[12px] ">
              <div className="flex justify-center items-center px-[10px] xl:px-[15px] py-[15px] xl:py-[19px] ">
                <div className="pr-[10px] ">
                  <Image src="/icons/iphone.svg" width={24} height={24} alt="sighIn"></Image>
                </div>
                <p className="text-[rgb(163,163,174)] font-montserrat text-[14px] xl:text-[16px] font-[400] leading-[17px] xl:leading-[20px] xl:pr-[20px]">
                  icloud аркылуу
                </p>
              </div>
            </div>
            <div className="box-border border-[0.6px] border-[rgb(228,228,228)] rounded-[4px] xl:rounded-[12px]">
              <div className="flex justify-center items-center px-[10px] py-[15px]">
                <div className="pr-[10px] ">
                  <Image src="/icons/google.svg" width={24} height={24} alt="google"></Image>
                </div>
                <p className="text-[rgb(163,163,174)] font-montserrat ext-[14px] xl:text-[16px] font-[400] leading-[17px] xl:leading-[20px] xl:pr-[20px]">
                  Google аркылуу{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* images
        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute left-[-350px] top-[220px] z-2"></Image>
        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute right-[-360px] bottom-[195px] z-2"></Image> */}
      </form>
    </div>
  );
};

export default SignIn;
