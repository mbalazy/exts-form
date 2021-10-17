import { LabelStyled } from "./Label.style";

type LabelProps = {
  children: JSX.Element | JSX.Element[];
  labelName: string;
  isRequired?: boolean;
  sideBySide?: boolean;
};

export const Label = ({
  children,
  labelName,
  isRequired,
  sideBySide,
}: LabelProps) => {
  return (
    <LabelStyled isRequired={isRequired} sideBySide={sideBySide}>
      <span>{labelName}</span>
      {children}
    </LabelStyled>
  );
};
