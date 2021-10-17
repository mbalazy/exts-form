import { FieldError, UseFormRegister } from "react-hook-form";

export type IEmail = string;

export type IFieldsError = {
  name?: FieldError | undefined;
  surname?: FieldError | undefined;
  birthdate?: FieldError | undefined;
  email?: FieldError | undefined;
  male?: FieldError | undefined;
};

export type IFormInputs = {
  name: string;
  surname: string;
  birthdate: string;
  email: IEmail;
  male: boolean;
};

export type IRegister = UseFormRegister<IFormInputs>;

export type IFormInputName =
  | "name"
  | "surname"
  | "birthdate"
  | "email"
  | "male";

export type IStatusMessage = "Valid" | "Not Valid";

export type IEmailValidationResponse = {
  status: number;
  status_message: IStatusMessage;
  validation_status: boolean;
  email: string;
};
