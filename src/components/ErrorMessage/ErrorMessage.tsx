import { ErrorMessageStyled } from "./ErrorMessage.style";

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return message ? <ErrorMessageStyled>{message}</ErrorMessageStyled> : null;
};
