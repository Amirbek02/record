import Image from "next/image";
import { Input } from "../UI/input";

const Feedback = () => {
  return (
    <div className="bg-[#0F0F2F] p-6">
      <div className="flex flex-col lg:flex-row justify-between mx-auto h-auto lg:items-center max-w-5xl">
        {/* Image Section */}
        <div className="mb-6 lg:mb-0 flex flex-col items-center">
          <p className="font-bold lg:hidden block text-2xl p-3 lg:text-3xl text-white text-center lg:text-left">
            Кайтарым байланыш
          </p>
          <Image
            src="/images/Union.png"
            alt="img"
            width={500}
            height={300}
            className="max-w-full justify-center flex items-center  h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-6">
            {/* Title */}
            <p className="font-bold lg:block hidden  text-2xl lg:text-3xl text-white text-center ">
              Кайтарым байланыш
            </p>

            {/* Input Fields */}
            <div className="flex flex-col items-center">
              <Input
                className="rounded-xl w-full max-w-[400px] h-[56px]"
                id="first-name"
                type="text"
                placeholder="Атыңыз"
              />
            </div>
            <div className="flex flex-col items-center">
              <Input
                className="rounded-xl w-full max-w-[400px] h-[56px]"
                id="last-name"
                type="text"
                placeholder="Фамилия"
              />
            </div>
            <div className="flex flex-col items-center">
              <Input
                className="rounded-xl w-full max-w-[400px] h-[56px]"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col items-center">
              <Input
                className="rounded-xl w-full max-w-[400px] h-[56px]"
                id="number"
                type="tel"
                placeholder="Телефон номер"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-xl w-full max-w-[400px] h-[56px] text-white bg-lime-600 hover:bg-lime-700 lg:bg-blue-800 font-bold text-[18px] lg:text-[20px]"
              >
                Жиберүү
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
