"use client";

import type { Input } from "@/@types";
import { clsx } from "clsx/lite";

export const TextInput: React.FC<Readonly<Input>> = ({
  config,
  errors,
  register,
  className,
  inputClassName,
  errorClassName,
}) => {
  const { type, label, placeholder, name, registerOptions, addBtn } = config;

  const error = errors && errors[name];

  // *-------------------- CLASS NAMES --------------------* //

  const inputClasses = clsx(
    "p-1 w-full shadow focus:ring-0",
    inputClassName,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none",
    addBtn ? "rounded-l" : "rounded"
  );

  const errorClasses = clsx("text-red-500", errorClassName);

  const btnClassName = clsx("py-1 px-2 rounded-r shadow", addBtn?.className);

  // *-------------------- INPUT --------------------* //

  return (
    <label className={className}>
      {label}
      <div className="flex w-full">
        <input
          className={inputClasses}
          type={type ? type : "text"}
          placeholder={placeholder}
          {...register(name, registerOptions)}
        />
        {addBtn && (
          <button
            type="button"
            className={btnClassName}
            onClick={addBtn.onClick}
          >
            {addBtn.label}
          </button>
        )}
      </div>
      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};
