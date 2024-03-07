import { useForm } from "react-hook-form";
import type { InputConfig } from "..";

export const useInputConfig = (fields: InputConfig[]) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  return {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    watch,
    errors,
    fields,
  };
};
