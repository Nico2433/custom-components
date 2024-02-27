import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export interface Input {
  config: InputConfig;
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  className?: string;
  inputClassName?: string;
}
