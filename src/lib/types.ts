export type IEmail = string

export type IFormInputs = {
  name: string;
  surname: string;
  birthdate: string;
  email: IEmail;
  male: boolean;
};

export type IStatusMessage = "Valid" | "Not Valid";

export type IEmailValidationResponse = {
  status: number;
  status_message: IStatusMessage;
  validation_status: boolean;
  email: string;
};

