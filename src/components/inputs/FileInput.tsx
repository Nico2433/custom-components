import type { Input } from "@/@types";
import { clsx } from "clsx/lite";
import { useRef } from "react";

export const FileInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  className,
  inputClass,
  errorClass,
}) => {
  const { label, name, rules, placeholder } = config;

  const fileRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name, rules);

  const error = errors && errors[name];

  const inputClasses = clsx(
    "p-1 w-full shadow rounded cursor-pointer focus:ring-0",
    inputClass,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  );

  const errorClasses = clsx("text-red-500", errorClass);

  return (
    <label className={className}>
      {label}
      <input
        ref={(e) => {
          ref(e);
          fileRef.current = e;
        }}
        className="hidden"
        type="file"
        {...rest}
      />
      <input
        onClick={() => fileRef.current && fileRef.current.click()}
        type="button"
        value={placeholder}
        className={inputClasses}
      />
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
