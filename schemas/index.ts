import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required"
  }),
  code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Minimum 8 characters"
  }).max(23),
  name: z.string().min(3)
})

export const ResetSchema = z.object({
  email: z.string().email(),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(8).max(23),
})