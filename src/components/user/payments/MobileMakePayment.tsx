"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/UI/button";
import { zodResolver } from "@hookform/resolvers/zod";
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
  amount: z
    .number({ invalid_type_error: "Сумма төлөмдү туура жазыныз!" })
    .min(0, { message: "Сумма төлөмү нөлдөн кичине болбошу керек." }),
});

const MobileMakePayment = ({
  bankCard = "/images/image 1.png",
  qrCode = "/images/Ram.png",
  bankLabelName = "Mbank",
  isAdmin = false,
  telNumber = "+996707700700",
  amount = 2500,
}: {
  bankCard?: string;
  qrCode?: string;
  bankLabelName?: string;
  isAdmin: boolean;
  telNumber?: string;
  amount?: number;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      telNumber: isAdmin ? " " : telNumber,
      amount: isAdmin ? 0 : amount,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex justify-center py-1 md:hidden">
      <div className="max-w-[400px] p-2 flex flex-col items-center gap-4">
        <h1 className="font-semibold text-[28px] text-darkGrey pb-5">Төлөм</h1>
        <Image src={bankCard} width={351} height={70} alt="bankcard" />
        <div className="mt-[30px] shadow-[0px_5px_16px_#3284E529] w-[257px] h-[243px] flex justify-center items-center bg-[#FDFCFD] rounded-[9px]">
          <Image src={qrCode} width={194} height={165} alt="qr-code" />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" mt-[36px] w-full  flex  flex-col justify-between  gap-3 items-center "
          >
            <FormField
              control={form.control}
              name="telNumber"
              render={({ field }) => (
                <>
                  <FormItem className="flex items-center h-[45px] border-b w-[310px]">
                    <FormLabel className="-ml-3 pr-4 h-full flex items-center justify-center mt-2 text-base font-medium text-[#7B7B7B]">
                      {bankLabelName}
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        readOnly={!isAdmin}
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
              name="amount"
              render={({ field }) => (
                <>
                  <FormItem className="flex items-center h-[45px] border-b w-[310px]">
                    <FormLabel className="-ml-3 pr-4 text-base font-medium text-[#7B7B7B] h-full flex items-center justify-center mt-2">
                      Баасы
                    </FormLabel>
                    <FormControl>
                      <Input
                        readOnly={!isAdmin}
                        {...field}
                        className="py-0 border-none rounded-none bg-transparent h-full text-blue-600 font-medium "
                      />
                    </FormControl>
                  </FormItem>
                  <FormMessage className="text-xs" />
                </>
              )}
            />
            <Button
               type={!isAdmin ? "button" : "submit"}
              className="w-full mt-10 font-semibold text-xl font-montserrat"
            >
              Төлөм
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MobileMakePayment;
