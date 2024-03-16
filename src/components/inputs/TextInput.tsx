import type { Input } from "@/@types";
import { clsx } from "clsx/lite";

export const TextInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  className,
  inputClass,
  errorClass,
}) => {
  const { type, label, placeholder, name, rules, optionalBtn } = config;

  const error = errors && errors[name];

  const inputClasses = clsx(
    "p-1 w-full shadow focus:ring-0",
    inputClass,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none",
    optionalBtn ? "rounded-l" : "rounded"
  );

  const errorClasses = clsx("text-red-500", errorClass);

  return (
    <label className={className}>
      {label}
      <div className="flex w-full">
        <input
          className={inputClasses}
          type={type ? type : "text"}
          placeholder={placeholder}
          {...register(name, rules)}
        />
        {optionalBtn && (
          <button
            type="button"
            className={`${
              optionalBtn.className || ""
            } py-1 px-2 rounded-r shadow`}
            onClick={optionalBtn.onClick}
          >
            {optionalBtn.label}
          </button>
        )}
      </div>
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
