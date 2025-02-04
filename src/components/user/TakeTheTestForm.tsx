'use client';
import React from 'react';
import { Button } from '@/components/UI/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/UI/form';
import { Input } from '@/components/UI/input';

//external dependencies
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Link from 'next/link';
const patterns = {
  whatsApp: /^0\d{9}$/,
};

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: 'Колдонуучунун аты кеминде 2 белгиден турушу керек.',
    })
    .max(50),
  lastName: z
    .string()
    .min(2, {
      message: 'Колдонуучунун аты кеминде 2 белгиден турушу керек.',
    })
    .max(50),
  whatsApp: z
    .string()
    .min(1, { message: 'Номеринизди жазыныз!' })
    .refine(
      (value) => {
        return patterns.whatsApp.test(value);
      },
      {
        message: 'WhatsApp номеринизди туура жазыныз!!!',
      },
    ),
});

const TakeTheTestForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      whatsApp: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className="md:w-[595px] max-w-[430px] md:max-w-[595px] rounded-[20px] bg-white border mx-auto flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}>
      <div className="flex flex-col py-5 md:px-0 px-11">
        <h1 className="text-center text-[22px] font-bold text-[#4C4C4C] pb-4">Сынамык тест</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:space-y-5 space-y-3 md:w-[422px] w-[322px]  flex flex-col">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-bold md:font-semibold md:text-[#7B7B7B]">
                    Аты
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Asel"
                      {...field}
                      className="h-[56px] border-[0.6px] border-[#000000B0]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-bold md:font-semibold md:text-[#7B7B7B]">
                    Фамилия
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Asylbekova"
                      {...field}
                      className="h-[56px] border-[0.6px] border-[#000000B0]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsApp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-bold md:font-semibold md:text-[#7B7B7B]">
                    Whatsapp номери
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0900900090"
                      {...field}
                      className="h-[56px] border-[0.6px] border-[#000000B0]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="md:w-full h-[53px] text-2xl font-extrabold">
              Тест тапшыруу
            </Button>
          </form>
        </Form>
        <Button variant="link" className=" mx-auto underline text-blue-600 text-base ">
          <Link href="/sign-up">Катталуу</Link>
        </Button>
      </div>
    </div>
  );
};

export default TakeTheTestForm;
