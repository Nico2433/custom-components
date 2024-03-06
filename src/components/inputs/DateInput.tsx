import type { Input } from "@/@types";

export const DateInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  labelClass = "",
  inputClass = "",
  errorClass = "",
}) => {
  const { label, name, rules } = config;

  const error = errors && errors[name];

  const inputClasses = `${inputClass}, ${
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  } p-1 w-full shadow rounded focus:ring-0`;

  return (
    <label className={labelClass}>
      {label}
      <input type="date" className={inputClasses} {...register(name, rules)} />
      {error && (
        <p className={`${errorClass} text-red-500`}>{String(error.message)}</p>
      )}
    </label>
  );
};
