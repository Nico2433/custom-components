import type { InputConfig } from "@/@types";
import { DocDelimiter, SelectInput } from "@/components";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

const SelectInputStory: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState<string | null>(null);

  const config: InputConfig = {
    name: "selectInput",
    label: "Select Input",
    registerOptions: { required: "Input is required" },
    selectOptions: [
      {
        label: "Option test",
        value: "Value 1",
      },
    ],
  };

  const onSubmit = (values: FieldValues) => {
    setPreview(values.selectInput);
  };

  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3"
        >
          <SelectInput
            register={register}
            errors={errors}
            config={config}
            className="flex flex-col items-center w-60"
          />
          {preview && <p>{preview}</p>}
          <button className="bg-blue-500 rounded py-1 px-2 hover:opacity-50">
            Submit
          </button>
        </form>
      </div>
    </DocDelimiter>
  );
};

export default SelectInputStory;
