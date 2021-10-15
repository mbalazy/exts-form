import { MainStyle, MainWrapper } from "./Main.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

type FormInputs = {
  name: string;
  surname: string;
  birthdate: string;
  email: string;
  male: boolean;
};

type StatusMessage = "Valid" | "Not Valid";

type EmailValidationResponse = {
  status: number;
  status_message: StatusMessage;
  validation_status: boolean;
  email: string;
};

const KEYSTROKE_DELAY = 350;
let timeout: NodeJS.Timeout;
const url = "/api/email-validator.php";

export const Main = () => {
  const { register, watch, handleSubmit } = useForm<FormInputs>();
  const emailValue = watch("email") || "";
  const submit = handleSubmit((data) => alert(JSON.stringify(data, null, 4)));

  const handleEmailValidation = async (email: string) => {
    try {
      clearTimeout(timeout);
      timeout = setTimeout(async function () {
        const res = await axios.get<EmailValidationResponse>(url, {
          params: { email },
        });
        const isEmailValid = res.data.validation_status;
        console.log(isEmailValid);
      }, KEYSTROKE_DELAY);
    } catch (error) {
      console.error(error);
    }
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
          <button onClick={submit}>Submit</button>
        </form>
      </MainStyle>
    </MainWrapper>
  );
};
