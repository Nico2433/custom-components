import type React from "react";
import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

type InputType =
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

type RulesType<T extends InputType> = T extends "file"
  ? InputsRules<File>
  : T extends "date" | "datetime-local"
  ? InputsRules<Date>
  : InputsRules;

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

// *-------------- INPUT --------------* //

export interface Input {
  config: InputConfig;
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  className?: string;
  inputClassName?: string;
}

export declare const DateInput: React.FC<Readonly<Input>>;
export declare const FileInput: React.FC<Readonly<Input>>;
export declare const SelectInput: React.FC<Readonly<Input>>;
export declare const TextInput: React.FC<Readonly<Input>>;
