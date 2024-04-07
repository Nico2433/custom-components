import type { RegisterOptions } from "react-hook-form";

export type InputType =
  | "text"
  | "password"
  | "textArea"
  | "select"
  | "file"
  | "date";

export interface SelectInputOptions {
  label: string;
  value: string;
}

// *-------------- CONFIG --------------* //

export interface InputConfig {
  name: string;
  type?: InputType;
  label?: string;
  placeholder?: string;
  registerOptions?: RegisterOptions;
  addBtn?: {
    label: string;
    className?: string;
    onClick: (arg?: any) => any;
  };
  selectOptions?: SelectInputOptions[];
  multiple?: boolean;
}
