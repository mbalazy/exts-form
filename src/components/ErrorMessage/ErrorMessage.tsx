import { ErrorMessageStyled } from "./ErrorMessage.style";

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <ErrorMessageStyled>{message}</ErrorMessageStyled>;
};
