import { useEffect, useState } from "react";
import { FieldError, RegisterOptions } from "react-hook-form";
import { IFormInputName, IRegister } from "../../lib/types";
import { InputStyled } from "./Input.style";

type InputProps = {
  register: IRegister;
  fieldName: IFormInputName;
  registerOptions?: RegisterOptions;
  type?: string;
  fieldError?: FieldError;
};

export const Input = ({
  register,
  fieldName,
  registerOptions,
  type,
  fieldError,
}: InputProps) => {
  const [applyGreen, setApplyGreen] = useState(false);
  const [applyRed, setApplyRed] = useState(false);

  //triger green border on first keystroke
  const handleChange = () => setApplyGreen(true);

  //conditionally overwrite (in css) green border with red
  //when there are errors in that field
  useEffect(() => {
    fieldError ? setApplyRed(true) : setApplyRed(false);
  }, [fieldError]);

  return (
    <InputStyled
      withRedBorder={applyRed}
      withGreenBorder={applyGreen}
      {...register(fieldName, { onChange: handleChange, ...registerOptions })}
      type={type}
    />
  );
};
