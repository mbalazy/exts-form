import { MainStyle, MainWrapper } from "./Main.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

type IEmail = string

type IFormInputs = {
  name: string;
  surname: string;
  birthdate: string;
  email: IEmail;
  male: boolean;
};

type IStatusMessage = "Valid" | "Not Valid";

type IEmailValidationResponse = {
  status: number;
  status_message: IStatusMessage;
  validation_status: boolean;
  email: string;
};

const KEYSTROKE_DELAY = 350;
let timeout: NodeJS.Timeout;
const URL = "/api/email-validator.php";

export const Main = () => {
  const { register, watch, handleSubmit } = useForm<IFormInputs>();
  const [emailValidationLoading, setEmailValidationLoading] = useState(false);

  const emailValue = watch("email") || "";
  const submit = handleSubmit((data) => alert(JSON.stringify(data, null, 4)));

  const checkEmailValidationStatus = async (email: IEmail) =>
    await axios
      .get<IEmailValidationResponse>(URL, { params: { email } })
      .then((res) => {
        const isEmailValid = res.data.validation_status;
        console.log(isEmailValid);
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
    if (emailValue) handleEmailValidation(emailValue);
  }, [emailValue]);

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
          <button onClick={submit}>Submit</button>
        </form>
      </MainStyle>
    </MainWrapper>
  );
};
