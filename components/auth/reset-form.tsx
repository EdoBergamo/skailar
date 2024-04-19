"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { ResetSchema } from "@/schemas";
import * as z from "zod";

import { reset } from "@/actions/reset";
import { useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardWrapper } from "./card-wrapper";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values)
        .then((data) => {
          setError(data?.error)
          setSuccess(data?.success)
        })
    })
  }

  return (
    <CardWrapper headerLabel="Forgot your password?" backButtonLabel="Back to login" backButtonHref="/login">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="example@skailar.com"
                      type="email"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button
            type="submit"
            className="mt-4 relative z-[2] hover:transitions-all duration-200 hover:bg-gray-400 flex items-center px-10  cursor-pointer  w-full py-1.5 text-[#0D0D0D] bg-gray-200 font-normal rounded-xl"
            disabled={isPending}
          >
            <span className="ml-1 font-semibold">
              Send reset email
            </span>
          </Button>
        </form>
      </Form>

    </CardWrapper>
  )
}