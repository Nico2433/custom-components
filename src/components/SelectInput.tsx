import { Input } from "../@types";

export const SelectInput: React.FC<Input> = ({
  config,
  register,
  errors,
  className,
  inputClassName,
}) => {
  const { label, placeholder, name, rules, options } = config;

  const error = errors && errors[name];

  return (
    <label className={className}>
      {label}
      <select
        defaultValue=""
        className={`${inputClassName || ""} ${
          errors && errors[name]
            ? "border-2 border-red-500 focus:border-red-500"
            : "border-none"
        } p-1 text-black w-full shadow rounded form-select focus:ring-0`}
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
      {error && <p className="text-red-500">{String(error.message)}</p>}
    </label>
  );
};
