import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MainStyle, MainWrapper } from "./Main.style";
import { IEmail, IEmailValidationResponse, IFormInputs } from "../../lib/types";
import { BACKEND_URL, KEYSTROKE_DELAY } from "../../lib/consts";

let timeout: NodeJS.Timeout;

export const Main = () => {
  const { register, watch, handleSubmit } = useForm<IFormInputs>();

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

  console.log(isEmailValid);

  return (
    <MainWrapper>
      <MainStyle>
        <form onSubmit={submit}>
          <label>
            Name
            <input {...register("name")} />
          </label>
          <label>
            Surname
            <input {...register("surname")} />
          </label>
          <label>
            Birthdate
            <input {...register("birthdate")} />
          </label>
          <label>
            Email
            <input {...register("email")} />
          </label>
          <label>
            Male
            <input type="checkbox" {...register("male")} />
          </label>
          {emailValidationLoading && <p>checking email</p>}
          <button disabled={!isEmailValid} onClick={submit}>Submit</button>
        </form>
      </MainStyle>
    </MainWrapper>
  );
};
