import type { RulesType } from ".";

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
  rules?: RulesType<T>;
  optionalBtn?: {
    label: string;
    onClick: (arg?: any) => Promise<void> | void;
  };
  options?: SelectInputOptions[];
}
