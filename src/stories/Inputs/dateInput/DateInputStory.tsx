import type { InputConfig } from "@/@types";
import { DateInput, DocDelimiter } from "@/components";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

const DateInputStory: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState<string | null>(null);

  const config: InputConfig = {
    name: "dateInput",
    label: "Date Input",
    registerOptions: { required: "Input is required" },
  };

  const onSubmit = (values: FieldValues) => {
    setPreview(values.dateInput);
  };

  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3"
        >
          <DateInput
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

export default DateInputStory;
