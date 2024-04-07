import type { InputComponent } from "@/@types";
import { clsx } from "clsx/lite";
import type { ChangeEvent, DragEvent } from "react";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

interface FileDropInput extends Omit<InputComponent, "register"> {
  control: Control<any>;
}

export const FileDropInput: React.FC<Readonly<FileDropInput>> = ({
  config,
  control,
  errors,
  className,
  inputClassName,
  errorClassName,
}) => {
  const { label, name, placeholder, registerOptions, multiple } = config;

  const error = errors && errors[name];

  // *-------------------- CLASS NAMES --------------------* //

  const inputClasses = clsx(
    "flex flex-col items-center justify-center p-1 w-full shadow rounded cursor-pointer focus:ring-0",
    inputClassName,
    error ? "border-2 border-red-500 focus:border-red-500" : "border-none"
  );

  const errorClasses = clsx("text-red-500", errorClassName);

  // *-------------------- INPUT --------------------* //

  return (
    <label className={className}>
      {label}
      <Controller
        name={name}
        control={control}
        rules={registerOptions}
        render={({ field: { onChange } }) => (
          <Dropzone
            placeholder={placeholder}
            multiple={multiple}
            onDrop={(e) => {
              e.preventDefault();

              const files = Array.from(e.dataTransfer.files);

              onChange(files);
            }}
            onChange={(e) => {
              e.preventDefault();

              const fileList = e.target.files;

              if (fileList) {
                const files = Array.from(fileList);

                onChange(files);
              }
            }}
            className={inputClasses}
          />
        )}
      />

      {error && <p className={errorClasses}>{String(error.message)}</p>}
    </label>
  );
};

// *-------------------- DROPZONE --------------------* //

interface DropzoneProps {
  placeholder?: string;
  className?: string;
  onDrop: (e: DragEvent<HTMLInputElement>) => unknown;
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  multiple?: boolean;
}

const Dropzone: React.FC<DropzoneProps> = ({
  placeholder,
  className,
  onDrop,
  onChange,
  multiple,
}) => {
  const onDrag = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={className}
      onDrop={onDrop}
      onDragOver={onDrag}
      onDragLeave={onDrag}
    >
      <p>{placeholder}</p>
      <input
        type="file"
        tabIndex={-1}
        className="hidden"
        onChange={onChange}
        multiple={multiple}
      />
    </div>
  );
};
