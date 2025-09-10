"use client";

import FormError from "@/shared/ui/form-error";
import Input from "@/shared/ui/input";
import Label from "@/shared/ui/label";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type FormFieldProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  disabled?: boolean;
};

export default function FormField<T extends FieldValues>({
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
  disabled = false,
}: FormFieldProps<T>) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id)}
      />
      <FormError message={error} />
    </div>
  );
}
