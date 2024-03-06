import type { Input } from "@/@types";
import { useRef } from "react";

export const FileInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  labelClass = "",
  inputClass = "",
  errorClass = "",
}) => {
  const { label, name, rules, placeholder } = config;

  const fileRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name, rules);

  const error = errors && errors[name];

  const inputClasses = `${inputClass} ${
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  } p-1 w-full shadow rounded cursor-pointer focus:ring-0`;

  return (
    <label className={labelClass}>
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
      {error && (
        <p className={`${errorClass} text-red-500`}>{String(error.message)}</p>
      )}
    </label>
  );
};
