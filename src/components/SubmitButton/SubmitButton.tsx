import { SubmitButtonStyled } from "./SubmitButton.style";

type SubmitButtonProps = {
  disabled: boolean;
};

export const SubmitButton = ({ disabled }: SubmitButtonProps) => {
  return (
    <SubmitButtonStyled disabled={disabled} type="submit">
      Submit
    </SubmitButtonStyled>
  );
};
