import { LabelStyled } from "./Label.style";

type InputProps = {
  children: JSX.Element;
  label: string;
  isRequired?: boolean;
  sideBySide?: boolean;
};

export const Label = ({
  children,
  label,
  isRequired,
  sideBySide,
}: InputProps) => {
  return (
    <LabelStyled isRequired={isRequired} sideBySide={sideBySide}>
      <span>{label}</span>
      {children}
    </LabelStyled>
  );
};
