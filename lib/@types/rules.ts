// *-------------- RULES --------------* //

export interface InputsRules {
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
  validate?: (value: unknown) => boolean | string;
}
