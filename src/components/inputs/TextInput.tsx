import type { Input } from "@/@types";

export const TextInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  labelClass = "",
  inputClass = "",
  errorClass = "",
}) => {
  const { type, label, placeholder, name, rules, optionalBtn } = config;

  const error = errors && errors[name];

  const inputClasses = `${inputClass} ${
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  } p-1 w-full shadow ${optionalBtn ? "rounded-l" : "rounded"} focus:ring-0`;

  return (
    <label className={labelClass}>
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
      {error && (
        <p className={`${errorClass} text-red-500`}>{String(error.message)}</p>
      )}
    </label>
  );
};
