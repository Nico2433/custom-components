import type { InputType } from ".";

// *-------------- RULES --------------* //

interface InputsRules<T = string> {
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
  validate?: (value: T) => boolean | string;
}

export type RulesType<T extends InputType> = T extends "file"
  ? InputsRules<File>
  : T extends "date" | "datetime-local"
  ? InputsRules<Date>
  : InputsRules;
