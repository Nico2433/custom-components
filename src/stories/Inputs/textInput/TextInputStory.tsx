import type { InputConfig } from "@/@types";
import { DocDelimiter, TextInput } from "@/components";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

interface TextInputStory {
  addBtn?: boolean;
}

const TextInputStory: React.FC<TextInputStory> = ({ addBtn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState<string | null>(null);
  const [btnPreview, setBtnPreview] = useState<string | null>(null);

  const config: InputConfig = {
    name: "textInput",
    label: "Text Input",
    registerOptions: {
      required: "Input is required",
    },
  };

  const configBtn: InputConfig = {
    name: "textInput",
    label: "Text Input",
    registerOptions: {
      required: "Input is required",
    },
    addBtn: {
      label: "Button",
      className: "",
      onClick: () => setBtnPreview("You clicked me"),
    },
  };

  const onSubmit = (values: FieldValues) => {
    setPreview(values.textInput);
  };

  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3"
        >
          {addBtn ? (
            <TextInput
              register={register}
              errors={errors}
              config={configBtn}
              className="flex flex-col items-center w-60"
            />
          ) : (
            <TextInput
              register={register}
              errors={errors}
              config={config}
              className="flex flex-col items-center w-60"
            />
          )}

          {preview && <p>{preview}</p>}
          {btnPreview && <p>{btnPreview}</p>}
          <button className="bg-blue-500 rounded py-1 px-2 hover:opacity-50">
            Submit
          </button>
        </form>
      </div>
    </DocDelimiter>
  );
};

export default TextInputStory;
