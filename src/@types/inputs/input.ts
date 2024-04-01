import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import type { InputConfig } from ".";

export interface InputComponent {
  config: InputConfig;
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<any>;
  className?: string;
  inputClassName?: string;
  errorClassName?: string;
}
