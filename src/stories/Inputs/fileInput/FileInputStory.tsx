import type { InputConfig } from "@/@types";
import { DocDelimiter, FileDropInput, FileInput } from "@/components";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

interface FileInputStory {
  fileDrop?: boolean;
}

const FileInputStory: React.FC<Readonly<FileInputStory>> = ({ fileDrop }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState<File | null>(null);

  const config: InputConfig = {
    name: "fileInput",
    label: "File Input",
    placeholder: "Select a file",
    registerOptions: { required: "This field is required" },
  };

  const onSubmit = (values: FieldValues) => {
    const fileInput: File[] = values.fileInput;

    setPreview(fileInput[0]);
  };

  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3"
        >
          {fileDrop ? (
            <FileDropInput
              control={control}
              errors={errors}
              config={config}
              className="flex flex-col items-center w-60"
              inputClassName="w-52 h-52 bg-yellow-500 hover:opacity-50"
            />
          ) : (
            <FileInput
              register={register}
              errors={errors}
              config={config}
              className="flex flex-col items-center w-60"
              inputClassName="bg-yellow-500 hover:opacity-50"
            />
          )}

          {preview && <p>{preview.name}</p>}
          <button className="bg-blue-500 rounded py-1 px-2 hover:opacity-50">
            Submit
          </button>
        </form>
      </div>
    </DocDelimiter>
  );
};

export default FileInputStory;
