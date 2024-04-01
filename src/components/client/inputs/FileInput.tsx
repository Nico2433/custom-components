import type { InputComponent } from "@/@types";
import { clsx } from "clsx/lite";
import { useRef } from "react";

export const FileInput: React.FC<Readonly<InputComponent>> = ({
  config,
  errors,
  register,
  className,
  inputClassName,
  errorClassName,
}) => {
  const { label, name, registerOptions, placeholder } = config;

  const fileRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name, registerOptions);

  const error = errors && errors[name];

  // *-------------------- CLASS NAMES --------------------* //

  const inputClasses = clsx(
    "p-1 w-full shadow rounded cursor-pointer focus:ring-0",
    inputClassName,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  );

  const errorClasses = clsx("text-red-500", errorClassName);

  // *-------------------- INPUT --------------------* //

  return (
    <label className={className}>
      {label}
      <input
        type="file"
        ref={(e) => {
          ref(e);
          fileRef.current = e;
        }}
        className="hidden"
        {...rest}
      />

      <input
        type="button"
        onClick={() => fileRef.current && fileRef.current.click()}
        value={placeholder}
        className={inputClasses}
      />

      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
