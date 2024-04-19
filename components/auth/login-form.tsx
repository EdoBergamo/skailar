"use client";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import * as z from "zod"
import { LoginSchema } from "@/schemas"

import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
  }

  return (
    <CardWrapper headerLabel="Welcome Back" backButtonLabel="Don't have an account?" backButtonHref="/register" showSocials>

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
                      placeholder="example@skailar.com"
                      type="email"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <FormError message="" />
          <FormSuccess message="" />

          <Button
            type="submit"
            className="mt-4 relative z-[2] hover:transitions-all duration-200 hover:bg-gray-400 flex items-center px-10  cursor-pointer  w-full py-1.5 text-[#0D0D0D] bg-gray-200 font-normal rounded-xl"
          >
            <span className="ml-1 font-semibold">
              Login
            </span>
          </Button>
        </form>
      </Form>

    </CardWrapper>
  )
}