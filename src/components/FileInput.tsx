import { useRef } from "react";
import { Input } from "../@types";

export const FileInput: React.FC<Input> = ({
  config,
  errors,
  register,
  className,
  inputClassName,
}) => {
  const { label, name, rules, placeholder } = config;

  const fileRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name, rules);

  const error = errors && errors[name];

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
        className={`${inputClassName || ""} ${
          errors && errors[name]
            ? "border-2 border-red-500 focus:border-red-500"
            : "border-none"
        } p-1 text-black w-full shadow rounded cursor-pointer focus:ring-0`}
      />
      {error && <p className="text-red-500">{String(error.message)}</p>}
    </label>
  );
};
