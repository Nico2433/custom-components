import type { Input } from "../@types";

export const DateInput: React.FC<Input> = ({
  config,
  errors,
  register,
  className,
  inputClassName,
}) => {
  const { label, name, rules } = config;

  const error = errors && errors[name];

  return (
    <label className={className}>
      {label}
      <input
        type="date"
        className={`${inputClassName || ""}, ${
          errors && errors[name]
            ? "border-2 border-red-500 focus:border-red-500"
            : "border-none"
        } p-1 text-black rounded focus:ring-0`}
        {...register(name, rules)}
      />
      {error && <p className="text-red-500">{String(error.message)}</p>}
    </label>
  );
};
