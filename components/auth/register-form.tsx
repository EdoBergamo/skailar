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
import { RegisterSchema } from "@/schemas"

import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success)
        })
    })
  }

  return (
    <CardWrapper headerLabel="Create an Account" backButtonLabel="Already have an account?" backButtonHref="/login" showSocials>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="John Doe"
                      type="text"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      type="password"
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
              Register
            </span>
          </Button>
        </form>
      </Form>

    </CardWrapper>
  )
}