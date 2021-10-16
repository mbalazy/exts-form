import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { IEmail, IEmailValidationResponse, IFormInputs } from "../../lib/types";
import { BACKEND_URL, KEYSTROKE_DELAY } from "../../lib/consts";
import { FormStyled } from "./Form.style";
import { Label } from "../Label/Label";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { Input } from "../Input/Input";

let timeout: NodeJS.Timeout;

export const Form = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({ mode: "onChange" });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailValidationLoading, setEmailValidationLoading] = useState(false);

  const emailValue = watch("email") || "";
  const submit = handleSubmit((data) => alert(JSON.stringify(data, null, 4)));

  const checkEmailValidationStatus = async (email: IEmail) =>
    await axios
      .get<IEmailValidationResponse>(BACKEND_URL, { params: { email } })
      .then((res) => setIsEmailValid(res.data.validation_status))
      .catch((err) => console.error(err));

  const handleEmailValidation = (email: IEmail) => {
    setEmailValidationLoading(true);
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      await checkEmailValidationStatus(email);
      setEmailValidationLoading(false);
    }, KEYSTROKE_DELAY);
  };

  useEffect(() => {
    return emailValue.length === 0
      ? setIsEmailValid(false)
      : handleEmailValidation(emailValue);
  }, [emailValue]);

  return (
    <FormStyled onSubmit={submit}>
      <Label isRequired label="name">
        <Input
          register={register}
          fieldName="name"
          registerOptions={{
            validate: (v) => v.length > 3 || "Name > 3 characters",
            required: "Name is required",
          }}
        />
      </Label>
      {errors.name && <p>{errors.name?.message}</p>}
      <Label label="surname">
        <Input register={register} fieldName="surname" />
      </Label>
      <Label label="birthdate">
        <Input type="date" register={register} fieldName="birthdate" />
      </Label>
      <Label label="email" isRequired>
        <Input register={register} fieldName="email" />
      </Label>
      {!isEmailValid && emailValue.length > 0 && <p>Email not valid</p>}
      <Label label="male" sideBySide>
        <Input type="checkbox" register={register} fieldName="male" />
      </Label>
      {emailValidationLoading && <p>checking email</p>}
      <SubmitButton disabled={!isEmailValid || emailValidationLoading} />
    </FormStyled>
  );
};
