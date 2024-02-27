import { InputType } from ".";

// *-------------- RULES --------------* //

interface InputsRules<T extends InputType> {
  required?: string;
  maxLength?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: ValueByType<T>) => boolean | string;
}

type ValueByType<T extends InputType> = T extends "select"
  ? string | number
  : T extends "file"
  ? FileList
  : T extends "date" | "datetime-local"
  ? string
  : string;
