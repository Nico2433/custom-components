import type { Input } from "@/@types";
import { clsx } from "clsx/lite";

export const DateInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  className,
  inputClass,
  errorClass,
}) => {
  const { label, name, rules } = config;
  errors?.password;

  const error = errors && errors[name];

  const inputClasses = clsx(
    "p-1 w-full shadow rounded focus:ring-0",
    inputClass,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  );

  const errorClasses = clsx("text-red-500", errorClass);

  return (
    <label className={className}>
      {label}
      <input type="date" className={inputClasses} {...register(name, rules)} />
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
