import type { InputComponent } from "@/@types";
import { clsx } from "clsx/lite";

export const TextAreaInput: React.FC<Readonly<InputComponent>> = ({
  config,
  errors,
  register,
  className,
  inputClassName,
  errorClassName,
}) => {
  const { label, placeholder, name, registerOptions, addBtn } = config;

  const error = errors && errors[name];

  // *-------------------- CLASS NAMES --------------------* //

  const inputClasses = clsx(
    "p-1 w-full shadow focus:ring-0",
    inputClassName,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none",
    addBtn ? "rounded-l" : "rounded"
  );

  const errorClasses = clsx("text-red-500", errorClassName);

  // *-------------------- INPUT --------------------* //

  return (
    <label className={className}>
      {label}
      <div className="flex w-full">
        <textarea
          className={inputClasses}
          placeholder={placeholder}
          {...register(name, registerOptions)}
        />
      </div>
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
