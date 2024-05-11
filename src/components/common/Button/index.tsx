import LinkButton from "./LinkButton";
import SimpleButton from "./SimpleButton";
import FormButton from "./FormButton";

const ButtonTypeMapping = {
  SimpleButton,
  LinkButton,
  FormButton,
} as const;

type ButtonTypes = keyof typeof ButtonTypeMapping;

type ButtonOwnProps<T extends ButtonTypes> = {
  as?: T;
};

type ButtonProps<T extends ButtonTypes> = ButtonOwnProps<T> &
  React.ComponentProps<typeof ButtonTypeMapping[T]>;

const defaultButtonType = "SimpleButton";

const Button = <T extends ButtonTypes = typeof defaultButtonType>({
  as,
  ...rest
}: ButtonProps<T>) => {
  const ButtonType =
    (as && ButtonTypeMapping[as]) ?? ButtonTypeMapping[defaultButtonType];
  return <ButtonType {...rest} />;
};

export default Button;
