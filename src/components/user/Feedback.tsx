//feedback
"use client";
import Image from "next/image";
import { Input } from "../UI/input";
import { useState, useRef } from "react";

const Feedback = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    lastname: "",
    email: "",
    number: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      lastname: "",
      email: "",
      number: "",
    };

    if (!formData.username.trim()) {
      newErrors.username = "Имя обязательно!";
      isValid = false;
      usernameRef.current?.focus();
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = "Фамилия обязательна!";
      isValid = false;
      lastnameRef.current?.focus();
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен!";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Введите корректный email!";
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.number.trim()) {
      newErrors.number = "Номер телефона обязателен!";
      isValid = false;
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = "Введите корректный номер телефона!";
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Форма успешно отправлена!");
      console.log("Данные формы:", formData);

      setFormData({
        username: "",
        lastname: "",
        email: "",
        number: "",
      });
    }
  };

  return (
    <div className="bg-[#0F0F2F] p-6">
      <div className="flex flex-col lg:flex-row justify-between mx-auto h-auto lg:items-center max-w-5xl">
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="font-bold lg:block hidden  text-2xl lg:text-3xl text-white text-center ">
              Кайтарым байланыш
            </p>

            <div className="flex flex-col items-center">
              <Input
                ref={usernameRef}
                className={`rounded-xl w-full max-w-[400px] h-[56px] ${
                  errors.username ? "border-red-500" : ""
                }`}
                id="username"
                type="text"
                placeholder="Атыңыз"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <p className="text-red text-start  text-sm">
                  {errors.username}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <Input
                className={`rounded-xl w-full max-w-[400px] h-[56px] ${
                  errors.lastname ? "border-red-500" : ""
                }`}
                id="lastname"
                type="text"
                placeholder="Фамилия"
                value={formData.lastname}
                onChange={handleInputChange}
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <Input
                className={`rounded-xl w-full max-w-[400px] h-[56px] ${
                  errors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <Input
                className={`rounded-xl w-full max-w-[400px] h-[56px] ${
                  errors.number ? "border-red-500" : ""
                }`}
                id="number"
                type="tel"
                placeholder="Телефон номер"
                value={formData.number}
                onChange={handleInputChange}
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number}</p>
              )}
            </div>

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
