import { RegisterOptions } from "react-hook-form";
import { IFieldsError, IFormInputName, IRegister } from "../../lib/types";
import { InputStyled } from "./Input.style";

type InputProps = {
  register: IRegister;
  fieldName: IFormInputName;
  registerOptions?: RegisterOptions;
  type?: string;
  errors?: IFieldsError;
};

export const Input = ({
  register,
  fieldName,
  registerOptions,
  type,
  errors,
}: InputProps) => {
  // console.log(errors);

  let applyRed = () => false;
  if (errors) {
    applyRed = () => errors[fieldName]?.message !== undefined;
  }

  return (
    <InputStyled
      withRedBorder={applyRed()}
      {...register(fieldName, registerOptions)}
      type={type}
    />
  );
};
