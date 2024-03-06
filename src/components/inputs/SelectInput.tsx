import type { Input } from "@/@types";

export const SelectInput: React.FC<Readonly<Input>> = ({
  config,
  register,
  errors,
  labelClass = "",
  inputClass = "",
  errorClass = "",
}) => {
  const { label, placeholder, name, rules, options } = config;

  const error = errors && errors[name];

  const inputClasses = `${inputClass} ${
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  } p-1 w-full shadow rounded form-select focus:ring-0`;

  return (
    <label className={labelClass}>
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
      {error && (
        <p className={`${errorClass} text-red-500`}>{String(error.message)}</p>
      )}
    </label>
  );
};
