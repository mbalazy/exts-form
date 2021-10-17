import { useEffect, useState } from "react";
import { FieldError, RegisterOptions } from "react-hook-form";
import { IFormInputName, IRegister } from "../../lib/types";
import { InputIconst } from "../InputIcons/InputIcons";
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
  const [greenStyle, setGreenStyle] = useState(false);
  const [redStyle, setRedStyle] = useState(false);

  //triger green border on first keystroke
  const handleChange = () => setGreenStyle(true);

  //conditionally overwrite (in css) green state with red
  //when there are errors in that field
  useEffect(() => {
    fieldError ? setRedStyle(true) : setRedStyle(false);
  }, [fieldError]);

  return (
    <>
      <InputStyled
        withRedStyle={redStyle}
        withGreenStyle={greenStyle}
        {...register(fieldName, { onChange: handleChange, ...registerOptions })}
        type={type}
      />
      <InputIconst />
    </>
  );
};
