// RegisterForm.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/features/auth/schemas/registerSchema";
import { register as registerUser } from "@/features/auth/services/authService";
import { toast } from "sonner";
import Button from "@/shared/ui/button";
import FormField from "@/components/ui/FormField";
import SpinnerButtonContent from "@/components/ui/SpinnerButtonContent";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      const res = await registerUser(data);
      toast.success(res.message);
      router.push("/auth/login");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Registration failed";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#2a2a2d] p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Register Page</h1>

        <FormField
          id="userName"
          label="Username"
          placeholder="username"
          register={register}
          error={errors.userName?.message}
          disabled={loading}
        />

        <FormField
          id="email"
          label="E-mail"
          placeholder="example@mail.com"
          register={register}
          error={errors.email?.message}
          disabled={loading}
        />

        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          register={register}
          error={errors.password?.message}
          disabled={loading}
        />

        <FormField
          id="rePassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          register={register}
          error={errors.rePassword?.message}
          disabled={loading}
        />

        <Button
          type="submit"
          disabled={loading}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <SpinnerButtonContent text="Registering..." /> : "Register"}
        </Button>
      </form>

      <div className="mt-4 text-center text-gray-400">
        <span>Have an account? </span>
        <button
          className={`font-semibold transition ${
            loading
              ? "text-gray-400 cursor-not-allowed no-underline"
              : "text-[#F7941D] cursor-pointer hover:underline"
          }`}
          disabled={loading}
          onClick={() => router.push("/auth/login")}
        >
          Log in
        </button>
      </div>
    </>
  );
}
