import type { InputsRules } from ".";

export type InputType =
  | "text"
  | "password"
  | "select"
  | "file"
  | "date"
  | "datetime-local";

export interface SelectInputOptions {
  label: string;
  value: string;
}

// *-------------- CONFIG --------------* //

export interface InputConfig<T extends InputType = InputType> {
  name: string;
  type?: T;
  label?: string;
  placeholder?: string;
  rules?: InputsRules;
  optionalBtn?: {
    label: string;
    onClick: (arg?: unknown) => Promise<void> | void;
  };
  options?: SelectInputOptions[];
}
