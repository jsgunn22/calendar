type ButtonType = "primary" || "secondary" || "danger" || "success" || "warning" || "neutral";

type ButtonVariant = "default" || "alt" || "text";

type ButtonProps = {
  label: any;
  btnType?: ButtonType;
  btnVariant?: ButtonVariant;
};

export default function Button({ label, btnType }: ButtonProps) {
    
  switch (btnType) {
    case "secondary":
        btnType = 'bg-neu-7'
        switch (btnVariant) {
            case "alt":
                btnType = 'bg-opac-neu text-neu-7';
                break;
            case "text":
                btnType = "text-neu-7";
                break;
            default:
                break;
        }
      break;

    default:

      break;
  }

  return <button className={`h-10 `}>{label}</button>;
}
