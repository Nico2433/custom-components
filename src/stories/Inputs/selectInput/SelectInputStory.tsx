import { DocDelimiter } from "@/components";
import { SelectInput } from "@/components/inputs";
import { useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { InputStory } from "../../@types";

const SelectInputStory: React.FC<Readonly<InputStory>> = ({
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

  const [value, setValue] = useState<string | null>(null);

  const onSubmit = (values: FieldValues) => {
    setValue(values.selectInput);
  };

  return (
    <DocDelimiter containerClass="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-3"
      >
        <SelectInput
          register={register}
          errors={errors}
          config={config}
          labelClass={labelClass}
          inputClass={inputClass}
          errorClass={errorClass}
        />
        {value && <p>{value}</p>}
        <button className="bg-blue-500 rounded py-1 px-2 hover:opacity-50">
          Submit
        </button>
      </form>
    </DocDelimiter>
  );
};

export default SelectInputStory;
