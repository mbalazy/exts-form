import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { IEmail, IEmailValidationResponse, IFormInputs } from "../../lib/types";
import { BACKEND_URL, KEYSTROKE_DELAY } from "../../lib/consts";
import { FormStyled } from "./Form.style";
import { Label } from "../Label/Label";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { Input } from "../Input/Input";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Spinner } from "../Spinner/Spinner";

let timeout: NodeJS.Timeout;

export const Form = () => {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({ mode: "onChange" });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailValidationLoading, setEmailValidationLoading] = useState(false);

  const emailValue = watch("email") || "";
  const submit = handleSubmit((data) => alert(JSON.stringify(data, null, 4)));

  const resolveEmailErrorInForm = (valid: boolean) =>
    valid === false
      ? setError("email", {
          message: "Invalid email",
        })
      : clearErrors(["email"]);

  const checkEmailValidationStatus = async (email: IEmail) =>
    await axios
      .get<IEmailValidationResponse>(BACKEND_URL, { params: { email } })
      .then(({ data: { validation_status } }) => {
        setIsEmailValid(validation_status);
        resolveEmailErrorInForm(validation_status);
      })
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
      <Label isRequired labelName="name">
        <Input
          fieldName="name"
          fieldError={errors.name}
          register={register}
          registerOptions={{
            validate: (v) => v.length > 3 || "Name > 3 characters",
            required: "Name is required",
          }}
        />
        {<ErrorMessage message={errors?.name?.message} />}
      </Label>
      <Label labelName="surname">
        <Input register={register} fieldName="surname" />
      </Label>
      <Label labelName="birthdate">
        <Input type="date" register={register} fieldName="birthdate" />
      </Label>
      <Label labelName="email" isRequired>
        <Input
          fieldName="email"
          fieldError={errors.email}
          register={register}
          registerOptions={{
            validate: () => isEmailValid || "Invalid email",
          }}
        />
        {<ErrorMessage message={errors?.email?.message} />}
      </Label>
      <Label labelName="male" sideBySide>
        <Input type="checkbox" register={register} fieldName="male" />
      </Label>
      <SubmitButton disabled={!isEmailValid || emailValidationLoading} />
      {emailValidationLoading && <Spinner />}
    </FormStyled>
  );
};
