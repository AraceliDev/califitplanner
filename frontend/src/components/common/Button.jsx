import { Button as HeroButton } from "@heroui/react";

function Button({ type = "primario", text, onClick, extraClasses = "", disabled = false }) {
  let variant = "solid";
  let baseClasses = "bg-[#2D3E27] text-amulet-100 hover:bg-[#264026]";

  switch (type) {
    case "secundario":
      variant = "bordered";
      baseClasses =
        "bg-transparent text-[#141C12] border border-[#141C12] hover:bg-[#141C12] hover:text-amulet-100";
      break;
    case "destacado":
      variant = "shadow";
      baseClasses = "bg-[#2D3E27] text-amulet-100 hover:bg-[#264026] shadow-lg";
      break;
    case "primario":
    default:
      variant = "solid";
      baseClasses = "bg-[#2D3E27] text-amulet-100 hover:bg-[#264026]";
  }

  // Combinar clases base con clases extra
  const finalClasses = extraClasses ? `${baseClasses} ${extraClasses}` : baseClasses;

  return (
    <HeroButton 
      variant={variant} 
      className={finalClasses} 
      onClick={onClick}
      isDisabled={disabled}
    >
      {text}
    </HeroButton>
  );
}

export default Button;