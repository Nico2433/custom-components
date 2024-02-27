import { useRef } from "react";

export const FileInput = ({
  config,
  errors,
  register,
  className,
  inputClassName,
}) => {
  const { label, name, rules, placeholder } = config;

  const fileRef = useRef(null);
  const { ref, ...rest } = register(name, rules);

  const inputClasses = `${inputClassName || ""} ${
    errors && errors[name]
      ? "border-2 border-red-500 focus:border-red-500"
      : "border-none"
  } p-1 text-black w-full shadow rounded cursor-pointer focus:ring-0`;

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
        className={inputClasses}
      />
      {error && <p className="text-red-500">{String(error.message)}</p>}
    </label>
  );
};
