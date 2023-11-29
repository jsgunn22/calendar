type ButtonType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "neutral";

type ButtonVariant = "default" | "alt" | "text";

type ButtonSize = "sm" | "md";
interface ButtonProps {
  label: any;
  btnType?: ButtonType;
  btnVariant?: ButtonVariant;
  btnSize?: ButtonSize;
}

export default function Button({
  label,
  btnType,
  btnVariant,
  btnSize,
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (btnType) {
      case "secondary":
        switch (btnVariant) {
          case "alt":
            return "bg-opac-sec text-sec-5";
            break;
          case "text":
            return "text-sec-5";
            break;
          default:
            return "bg-sec-5 text-neu-0";
            break;
        }
        break;
      case "danger":
        switch (btnVariant) {
          case "alt":
            return "bg-opac-dan text-dan-5";
            break;
          case "text":
            return "text-dan-5";
            break;
          default:
            return "bg-dan-5 text-neu-0";
            break;
        }
        break;
      case "success":
        switch (btnVariant) {
          case "alt":
            return "bg-opac-suc text-suc-5";
            break;
          case "text":
            return "text-suc-5";
            break;
          default:
            return "bg-suc-5 text-neu-0";
            break;
        }
        break;
      case "warning":
        switch (btnVariant) {
          case "alt":
            return "bg-opac-war text-war-9";
            break;
          case "text":
            return "text-war-5";
            break;
          default:
            return "bg-war-5 text-neu-0";
            break;
        }
      case "neutral":
        switch (btnVariant) {
          case "alt":
            return "bg-opac-neu text-neu-7";
            break;
          case "text":
            return "text-neu-7";
            break;
          default:
            return "bg-neu-7 text-neu-0";
            break;
        }
        break;
      default:
        switch (btnVariant) {
          case "alt":
            return "bg-opac-pri text-pri-5";
            break;
          case "text":
            return "text-pri-5";
          default:
            return "bg-pri-5 text-neu-0";
            break;
        }
        break;
    }
  };

  return (
    <button
      className={`py-3 px-4 text-h4 font-bold rounded-lg ${getButtonStyle()}`}
    >
      {label}
    </button>
  );
}
