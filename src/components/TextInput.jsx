export const TextInput = ({
  config,
  errors,
  register,
  className,
  inputClassName,
}) => {
  const { type, label, placeholder, name, rules, optionalBtn } = config;

  const inputClasses = `${inputClassName || ""} ${
    errors && errors[name]
      ? "border-2 border-red-500 focus:border-red-500"
      : "border-none"
  } p-1 text-black w-full shadow ${
    optionalBtn ? "rounded-l" : "rounded"
  } focus:ring-0`;

  const error = errors && errors[name];

  return (
    <label className={className}>
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
            className="bg-neutral-50 text-black py-1 px-2 rounded-r shadow hover:bg-neutral-200"
            onClick={optionalBtn.onClick}
          >
            {optionalBtn.label}
          </button>
        )}
      </div>
      {error && <p className="text-red-500">{String(error.message)}</p>}
    </label>
  );
};
