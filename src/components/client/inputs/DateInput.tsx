"use client";

import type { Input } from "@/@types";
import { clsx } from "clsx/lite";

export const DateInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  className,
  inputClassName,
  errorClassName,
}) => {
  const { label, name, registerOptions } = config;

  const error = errors && errors[name];

  // *-------------------- CLASS NAMES --------------------* //

  const inputClasses = clsx(
    "p-1 w-full shadow rounded focus:ring-0",
    inputClassName,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  );

  const errorClasses = clsx("text-red-500", errorClassName);

  // *-------------------- INPUT --------------------* //

  return (
    <label className={className}>
      {label}
      <input
        type="date"
        className={inputClasses}
        {...register(name, registerOptions)}
      />
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
