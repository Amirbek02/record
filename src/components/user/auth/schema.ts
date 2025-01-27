import { z } from 'zod';

export const passwordSchema = z.string().min(4, { message: 'Введите корректный пароль' });

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      first_name: z.string().min(2, { message: 'Введите имя' }),
      last_name: z.string().min(2, { message: 'Введите фамилию' }),
      password_confirm: passwordSchema,
      user_status: z.string(),
      paid: z.string(),
    }),
  )
  .refine((data) => data.password === data.password_confirm, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
