//feedback
"use client";
import Image from "next/image";
import { Input } from "../UI/input";
import { useState } from "react";

const Feedback = () => {
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

  const validateField = (field: string, value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    switch (field) {
      case "username":
        return value.trim() ? "" : "Атыңызды жазуу милдеттүү!";
      case "lastname":
        return value.trim() ? "" : "Фамилияңызды жазуу милдеттүү!";
      case "email":
        if (!value.trim()) return "Email дарегиңизди жазуу милдеттүү!";
        if (!emailRegex.test(value)) return "Туура email дарегин киргизиңиз!";
        return "";
      case "number":
        if (!value.trim()) return "Телефон номериңизди жазуу милдеттүү!";
        if (!phoneRegex.test(value)) return "Туура телефон номерин киргизиңиз!";
        return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = Object.keys(formData).reduce((acc, field) => {
      const error = validateField(
        field,
        formData[field as keyof typeof formData]
      );
      return { ...acc, [field]: error };
    }, {});
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: validateField(id, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Форма успешно отправлена!");
      console.log("Данные формы:", formData);

      // Reset form
      setFormData({
        username: "",
        lastname: "",
        email: "",
        number: "",
      });
      setErrors({
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
          <p className="font-bold lg:hidden block sm:text-2xl text-[20px] md:text-2xl p-3 lg:text-3xl text-white  text-center lg:text-left">
            Кайтарым байланыш
          </p>
          <Image
            src="/images/Union.png"
            alt="Feedback Illustration"
            width={500}
            height={300}
            className="max-w-full justify-center flex items-center h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="font-bold lg:block hidden text-2xl lg:text-3xl text-white text-center">
              Кайтарым байланыш
            </p>

            {[
              {
                id: "username",
                type: "text",
                placeholder: "Атыңыз",
                error: errors.username,
              },
              {
                id: "lastname",
                type: "text",
                placeholder: "Фамилия",
                error: errors.lastname,
              },
              {
                id: "email",
                type: "email",
                placeholder: "Email",
                error: errors.email,
              },
              {
                id: "number",
                type: "tel",
                placeholder: "Телефон номер",
                error: errors.number,
              },
            ].map((field) => (
              <div
                key={field.id}
                className="justify-center  pl-0 flex flex-col items-center"
              >
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleInputChange}
                  className={`rounded-xl w-full max-w-[400px] h-[56px] ${
                    field.error ? "border-red-500" : ""
                  }`}
                />
                {field.error && (
                  <p className="text-red lg:pl-16 text-center  lg:text-start w-full text-sm">
                    {field.error}
                  </p>
                )}
              </div>
            ))}

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
