import type { Input } from "@/@types";
import { clsx } from "clsx/lite";

export const SelectInput: React.FC<Readonly<Input>> = ({
  config,
  register,
  errors,
  className,
  inputClass,
  errorClass,
}) => {
  const { label, placeholder, name, rules, options } = config;

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
      <select
        defaultValue=""
        className={inputClasses}
        {...register(name, rules)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
