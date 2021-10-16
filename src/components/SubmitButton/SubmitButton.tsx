type SubmitButtonProps = {
  disabled: boolean;
};

export const SubmitButton = ({ disabled }: SubmitButtonProps) => {
  return (
    <button disabled={disabled} type="submit">
      Submit
    </button>
  );
};
