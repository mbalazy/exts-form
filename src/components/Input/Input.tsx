import { RegisterOptions } from "react-hook-form";
import { IFormInputName, IRegister } from "../../lib/types";
import { InputStyled } from "./Input.style";

type InputProps = {
  register: IRegister;
  fieldName: IFormInputName;
  registerOptions?: RegisterOptions;
  type?: string;
};

export const Input = ({
  register,
  fieldName,
  registerOptions,
  type,
}: InputProps) => {
  return <InputStyled {...register(fieldName, registerOptions)} type={type} />;
};
