"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/UI/button";
import BankCard from "@/components/UI/bankCard";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
import Image from "next/image";
import H1Text from "./H1Text";

const patterns = {
  telNumber: /^\+996\d{9}$/,
};

const formSchema = z.object({
  telNumber: z
    .string()
    .min(1, { message: "Номеринизди жазыныз!" })
    .refine(
      (value) => {
        return patterns.telNumber.test(value);
      },
      {
        message: "WhatsApp номеринизди туура жазыныз!!!",
      }
    ),
  fullName: z
    .string()
    .min(2, {
      message: "Колдонуучунун аты кеминде 2 белгиден турушу керек.",
    })
    .max(200),
  amount: z
    .number({ invalid_type_error: "Сумма төлөмдү туура жазыныз!" })
    .min(0, { message: "Сумма төлөмү нөлдөн кичине болбошу керек." }),
});

const MakePayment = ({
  bankLabelName = "MBANK",
}: {
  bankLabelName?: string;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      telNumber: "+996707700700",
      fullName: " Асель Асанова",
      amount: 2500,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="ml-10 mt-5">
      <H1Text />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" mt-[36px] rounded-[20px] shadow-[0px_0px_6px_0px_#4C4C4C] max-w-[906px] h-[454px] p-5 flex justify-between border gap-3 items-center "
        >
          {" "}
          <div className="flex flex-col w-[378px] h-[406px] justify-between">
            <div className="pl-5">
              <FormField
                control={form.control}
                name="telNumber"
                render={({ field }) => (
                  <>
                    <FormItem className="flex items-center h-[45px] border-b">
                      <FormLabel className="-ml-3 pr-8 h-full flex items-center justify-center mt-2 text-base font-medium text-[#7B7B7B]">
                        {bankLabelName}
                      </FormLabel>

                      <FormControl>
                        <Input
                          {...field}
                          className=" py-0 border-none rounded-none bg-transparent h-full text-blue-600 font-medium"
                        />
                      </FormControl>
                    </FormItem>
                    <FormMessage className="text-xs" />
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <>
                    <FormItem className="flex items-center h-[45px] border-b">
                      <FormLabel className="-ml-3 text-base font-medium text-[#7B7B7B] pr-14 h-full flex items-center justify-center mt-2">
                        ФИО
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="py-0 border-none rounded-none bg-transparent h-full text-blue-600 font-medium"
                        />
                      </FormControl>
                    </FormItem>
                    <FormMessage className="text-xs" />
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <>
                    <FormItem className="flex items-center h-[45px] border-b">
                      <FormLabel className="-ml-3 pr-8 text-base font-medium text-[#7B7B7B] h-full flex items-center justify-center mt-2">
                        СУММА
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="py-0 border-none rounded-none bg-transparent h-full text-blue-600 font-medium "
                        />
                      </FormControl>
                    </FormItem>
                    <FormMessage className="text-xs" />
                  </>
                )}
              />
            </div>
            <BankCard
              imgSrc="/images/image 4.png"
              className="w-[372px] h-[184px] shadow-transparent"
            />
          </div>
          <div className="w-[358px] h-[365px]  flex flex-col items-center justify-between gap-3">
            <div className="shadow-[0px_5px_16px_#3284E529] w-[228px] h-[222px] flex justify-center items-center bg-[#FDFCFD] rounded-[9px]">
              <Image
                src="/images/Ram.png"
                width={172.33}
                height={151.55}
                alt="qr-code"
              />
            </div>
            <Button
              type="submit"
              className=" md:w-full font-montserrat text-2xl font-semibold"
            >
              Төлөм аткаруу
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MakePayment;
