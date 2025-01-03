"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/UI/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
//external dependencies
import { CircleArrowRight } from "lucide-react";

const patterns = {
  whatsApp: /^0\d{9}$/,
};

const formSchema = z.object({
  whatsApp: z
    .string()
    .min(1, { message: "Номеринизди жазыныз!" })
    .refine(
      (value) => {
        return patterns.whatsApp.test(value);
      },
      {
        message: "WhatsApp номеринизди туура жазыныз!!!",
      }
    ),
});

const SendResult = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      whatsApp: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8  mt-11">
        <FormField
          control={form.control}
          name="whatsApp"
          render={({ field }) => (
            <FormItem className="flex md:flex-row flex-col  max-w-[370px] md:max-w-[926px] gap-2 justify-between px-2 md:px-5  lg:px-0 mx-auto ">
              <FormDescription className="lg:text-xl text-sm md:text-base lg:max-w-[439px] md:max-w-[380px] w-full ">
                Тестти аткаруунун деталдуу жыйынтыгы тууралу толук маалымат алуу
                үчүн <br />
                Whatsapp номериңизди калтырыңыз
              </FormDescription>
              <div className="md:relative md:self-end flex flex-col gap-7">
                <FormControl>
                  <Input
                    placeholder="0990990990"
                    {...field}
                    className="md:w-[387px] w-full h-[56px] text-[20px]"
                  />
                </FormControl>
                <FormMessage className="text-red text-xs" />
                <Button
                  type="submit"
                  className="md:absolute right-0 top-0 text-xl font-bold"
                >
                  Жөнөттү{" "}
                  <CircleArrowRight
                    size={40}
                    strokeWidth={1.8}
                    className="hidden md:block"
                  />
                </Button>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SendResult;
