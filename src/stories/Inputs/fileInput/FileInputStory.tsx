import { DocDelimiter } from "@/components";
import { FileInput } from "@/components/inputs";
import { useInputConfig } from "@/hooks";
import { useState } from "react";
import type { FieldValues } from "react-hook-form";
import type { InputStory } from "../../@types";

const FileInputStory: React.FC<Readonly<InputStory>> = ({
  config,
  labelClass,
  inputClass,
  errorClass,
}) => {
  const { register, handleSubmit, errors } = useInputConfig([config]);

  const [value, setValue] = useState<File | null>(null);

  const onSubmit = (values: FieldValues) => {
    const fileInput: FileList = values.fileInput;
    const file = fileInput.item(0);

    setValue(file);
  };

  return (
    <DocDelimiter containerClass="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-3"
      >
        <FileInput
          register={register}
          errors={errors}
          config={config}
          labelClass={labelClass}
          inputClass={inputClass}
          errorClass={errorClass}
        />
        {value && <p>{value.name}</p>}
        <button className="bg-blue-500 rounded py-1 px-2 hover:opacity-50">
          Submit
        </button>
      </form>
    </DocDelimiter>
  );
};

export default FileInputStory;
