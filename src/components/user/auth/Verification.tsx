'use client';
import CustomButton from '@/components/UI/CustomButton';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/lib/store/authStore';
import Link from 'next/link';

const Verification = () => {
  const { verification, error, isLoading } = useAuthStore();
  console.log(verification);

  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    code: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleVerification = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, code } = formData;
    try {
      await verification(email, code);

      router.push('/in');
    } catch (err) {
      console.error('Error during login:', err);
      setIsVerified(false);
    }
  };

  const inputClass =
    'font-montserrat font-[400] box-border border-[0.6px] border-gray-300 placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px] xl:w-[500px] rounded-[4px] xl:rounded-[12px] py-[19px] pl-[15px] mb-[20px] text-[16px] leading-[20px]';

  return (
    <div className="flex justify-center items-center flex-col w-full h-auto">
      <Link href="/">
        <div className="pt-[26px] xl:pt-[120px] pb-[82px] xl:pb-[40px]">
          <Image src="/icons/record-logo.svg" width={290} height={95} alt="Sign In" />
        </div>
      </Link>

      <form className="flex justify-center items-center flex-col relative">
        <h1 className="font-montserrat text-[rgb(85,87,87)] font-[500] text-[28px] xl:text-[32px] leading-[34px] xl:leading-[39px] pt-[82px] xl:pt-[76px] pb-[40px]">
          Катталуу
        </h1>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="qwerty@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          className={inputClass}
        />

        <input
          type="number"
          id="number"
          name="code"
          placeholder="Код"
          value={formData.code}
          onChange={handleInputChange}
          className={inputClass}
        />
        {error && <h3 className="font-medium text-[12px] text-red-500 mb-[20px]">{error}</h3>}
        {isVerified && (
          <h3 className="font-medium text-[12px] text-green-500 mb-[20px]">
            Верификация ийгиликтүү аяктады!
          </h3>
        )}
        <CustomButton
          type="submit"
          {...(isLoading && { disabled: true })}
          onClick={handleVerification}
          title="Кирүү"
          containerStyles="mm:rounded-[5px] xl:rounded-[12px] h-[45px] mm:h-[56px] mm:w-[356px] xl:w-[500px] mb-[14px] xl:mb-[114px] bg-customGray xl:bg-customBlue"
          textStyles="font-[500] mm:font-[700] text-[21px] mm:text-[24px] leading-[29px] tracking-[4.5%] text-[rgb(75,75,75)] xl:text-[rgb(255,255,255)]"
        />
      </form>
    </div>
  );
};

export default Verification;
