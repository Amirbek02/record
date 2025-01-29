'use client';
import Image from 'next/image';
import { Input } from '../UI/input';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useFeedbackStore } from '@/store/useFeedbackStore';

const Feedback = () => {
  const { token, error } = useFeedbackStore() as { token: string; error: any };
  // console.log(error, "feedback errororor");.

  const [formData, setFormData] = useState({
    username: '',
    lastname: '',
    email: '',
    number: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    lastname: '',
    email: '',
    number: '',
    message: '',
  });

  useEffect(() => {
    if (error) {
      console.error('Ошибка:', error);
    }
  }, [error]);

  const validateField = (field: string, value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const phoneRegex = /^[0-9]{10,15}$/;
    const phoneRegex = /^0\d{9}$/;

    switch (field) {
      case 'username':
        return value.trim() ? '' : 'Атыңызды жазуу милдеттүү!';
      case 'lastname':
        return value.trim() ? '' : 'Фамилияңызды жазуу милдеттүү!';
      case 'email':
        if (token) return ''; // Если токен есть, email не проверяется
        if (!value.trim()) return 'Email дарегиңизди жазуу милдеттүү!';
        if (!emailRegex.test(value)) return 'Туура email дарегин киргизиңиз!';
        return '';
      case 'number':
        if (!value.trim()) return 'Телефон номериңизди жазуу милдеттүү!';
        if (!phoneRegex.test(value)) return 'Туура номерди киргизиңиз! М: 0500123456';
        return '';
      case 'message':
        return value.trim() ? '' : 'Билдирүү жазуу милдеттүү!';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<keyof typeof formData, string> = Object.keys(formData).reduce(
      (acc, field) => {
        const error = validateField(field, formData[field as keyof typeof formData]);
        return { ...acc, [field]: error };
      },
      {} as Record<keyof typeof formData, string>,
    );

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const feedbackData = token
        ? {
            first_name: formData.username,
            last_name: formData.lastname,
            phone_number: formData.number,
            text: formData.message,
            token,
          }
        : {
            first_name: formData.username,
            last_name: formData.lastname,
            phone_number: formData.number,
            text: formData.message,
            email: formData.email || undefined,
          };

      try {
        const { sendFeedback } = useFeedbackStore.getState();
        await sendFeedback(feedbackData);

        if (error && error.response?.data) {
          setErrors((prev) => ({
            ...prev,
            ...error.response.data,
          }));
        } else {
          setFormData({
            username: '',
            lastname: '',
            email: '',
            number: '',
            message: '',
          });

          // Очищаем ошибки
          setErrors({
            username: '',
            lastname: '',
            email: '',
            number: '',
            message: '',
          });
          console.log('Данные формы успешно отправлены:', feedbackData);
          // alert("Форма ийгиликтүү жөнөтүлдү!");
          toast.success('Форма ийгиликтүү жөнөтүлдү!');
        }
      } catch (error) {
        if (error instanceof Error) {
          // Ловим стандартные ошибки
          console.error('Ошибка при отправке обратной связи:', error.message);
        } else {
          // Ловим ошибку, если она не стандартная
          console.error('Неизвестная ошибка при отправке обратной связи:', error);
        }

        setErrors((prev) => ({
          ...prev,
          apiError: 'Ошибка соединения. Попробуйте снова.',
        }));
      }
    }
  };

  return (
    <div className="bg-[#0F0F2F] py-[150px] ">
      <div className="flex flex-col lg:flex-row justify-between mx-auto h-auto lg:items-center max-w-5xl">
        <div className="mb-6 lg:mb-0 flex flex-col items-center">
          <p className="font-bold lg:hidden block sm:text-2xl text-[20px] md:text-2xl p-3 lg:text-3xl text-white text-center lg:text-left">
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

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="font-bold lg:block hidden text-2xl lg:text-3xl text-white text-center">
              Кайтарым байланыш
            </p>

            {[
              {
                id: 'username',
                type: 'text',
                placeholder: 'Атыңыз',
                error: errors.username,
                apiError: error?.username,
              },
              {
                id: 'lastname',
                type: 'text',
                placeholder: 'Фамилия',
                error: errors.lastname,
                apiError: error?.lastname,
              },
              ...(token
                ? []
                : [
                    {
                      id: 'email',
                      type: 'email',
                      placeholder: 'Email',
                      error: errors.email,
                      apiError: error?.email,
                    },
                  ]),
              {
                id: 'number',
                type: 'tel',
                placeholder: 'Телефон номер',
                error: errors.number,
                apiError: error?.phone_number,
              },
              {
                id: 'message',
                type: 'textarea',
                placeholder: 'Сиздин билдирүүңүз',
                error: errors.message,
                apiError: error?.text,
              },
            ].map((field) => (
              <div key={field.id} className="justify-center pl-0 flex flex-col items-center">
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData] || ''}
                    onChange={handleInputChange}
                    className={`rounded-xl w-full max-w-[400px] h-[120px] p-4 border bg-white text-gray-900 focus:outline-none s ${
                      field.error ? 'border-red-500 font-medium' : ''
                    }`}
                  />
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData] || ''}
                    onChange={handleInputChange}
                    className={`rounded-xl w-full max-w-[400px] h-[56px] ${
                      field.error ? 'border-red-600  ' : ''
                    }`}
                  />
                )}
                {(field.error || field.apiError) && (
                  <p className="text-red lg:pl-16 text-center lg:text-start w-full text-[15px]">
                    {field.error || field.apiError}
                  </p>
                )}
              </div>
            ))}

            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-xl w-full max-w-[400px] h-[56px] text-white bg-lime-600 hover:bg-lime-700 lg:bg-blue-800 font-bold text-[18px] lg:text-[20px]">
                Жиберүү
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
