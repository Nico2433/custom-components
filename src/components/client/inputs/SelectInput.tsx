import type { Input } from "@/@types";
import { clsx } from "clsx/lite";

export const SelectInput: React.FC<Readonly<Input>> = ({
  config,
  register,
  errors,
  className,
  inputClassName,
  errorClassName,
}) => {
  const { label, placeholder, name, registerOptions, selectOptions } = config;

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
      <select
        defaultValue=""
        className={inputClasses}
        {...register(name, registerOptions)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {selectOptions?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
