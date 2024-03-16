import { DocDelimiter, FileInput } from "@/components";
import type { InputStory } from "@/stories/@types";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

const FileInputStory: React.FC<Readonly<InputStory>> = ({
  config,
  labelClass,
  inputClass,
  errorClass,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [value, setValue] = useState<File | null>(null);

  const onSubmit = (values: FieldValues) => {
    const fileInput: FileList = values.fileInput;
    const file = fileInput.item(0);

    setValue(file);
  };

  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3"
        >
          <FileInput
            register={register}
            errors={errors}
            config={config}
            className={labelClass}
            inputClass={inputClass}
            errorClass={errorClass}
          />
          {value && <p>{value.name}</p>}
          <button className="bg-blue-500 rounded py-1 px-2 hover:opacity-50">
            Submit
          </button>
        </form>
      </div>
    </DocDelimiter>
  );
};

export default FileInputStory;
