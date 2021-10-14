import { MainStyle, MainWrapper } from "./Main.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

type FormData = {
  firstName: string;
  email: string;
};

const url = "/api/email-validator.php?email=";

export const Main = () => {
  const { register, watch, handleSubmit } = useForm<FormData>();
  const emailValue = watch("email");

  const submit = handleSubmit((data) => alert(JSON.stringify(data, null, 4)));

  const handleValidation = async (email: string) => {
    try {
      const res = await axios(`${url}${email}`);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (emailValue && emailValue.length > 0) handleValidation(emailValue);
  }, [emailValue]);

  return (
    <MainWrapper>
      <MainStyle>
        <form onSubmit={submit}>
          <label>
            First Name
            <input {...register("firstName")} />
          </label>
          <label>
            Email
            <input {...register("email")} />
          </label>
          <button onClick={submit}>Submit</button>
        </form>
      </MainStyle>
    </MainWrapper>
  );
};
