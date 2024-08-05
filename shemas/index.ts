import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Please enter",
    })
    .email({
      message: "Please enter a valid email address.",
    }),
  password: z.string().min(8).max(255),
});
