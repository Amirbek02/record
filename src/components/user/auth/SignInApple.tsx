import CustomButton from "@/components/UI/CustomButton";
import Image from "next/image";

const SignInApple = () => {
  const inputClass =
    "font-montserrat font-[400] box-border border-[0.6px] border-gray-300 placeholder-gray-300 text-[rgba(0,0,0,0.44)] w-[270px] mm:w-[360px] xl:w-[500px] rounded-[12px] py-[19px] pl-[15px] mb-[20px] text-[16px] leading-[20px]";

  return (
    <div className="flex justify-center items-center flex-col w-[360px] mm:w-auto">
      <div className="pt-[26px] xl:pt-[80px] pb-[152px] xl:pb-[106px]">
        <Image
          src="/icons/record-logo.svg"
          width={290}
          height={95}
          alt="sighIn"
        ></Image>
      </div>
      <h1 className="hidden xl:block  font-montserrat font-medium text-[36px] leading-[44px] tracking-[2%] text-[rgb(76,76,76)] pb-[90px]">
        Кош келдиңиз!
      </h1>

      <form className="flex justify-center items-center flex-col relative">
        <input
          type="text"
          placeholder="Record@gmail.com"
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Record@gmail.com"
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Record@gmail.com"
          className={`${inputClass} bg-[rgb(76,76,76)]`}
        />

        <CustomButton
          title="Катталуу"
          containerStyles="mm:rounded-[5px] xl:rounded-[12px] mm:w-[356px] xl:w-[500px] mb-[32px] xl:mb-[300px]"
          textStyles="font-[500] xl:font-[700] text-[21px] mm:text-[24px] leading-[29px] tracking-[4.5%] text-[rgb(255,255,255)]"
        />

        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute left-[-350px] bottom-[180px] z-2"
        ></Image>
        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute right-[-360px] bottom-[180px] z-2"
        ></Image>
      </form>
    </div>
  );
};

export default SignInApple;
