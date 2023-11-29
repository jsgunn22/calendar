type ButtonType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "neutral";

type ButtonVariant = "default" | "alt" | "text";

type ButtonSize = "sm" | "md";

export interface ButtonProps Pick<JSX.IntrinsicElements['button']> {
    label: any;
    btnType?: ButtonType;
    btnVariant?: ButtonVariant;
    btnSize?: ButtonSize;
}