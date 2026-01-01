import { type Component, type JSX, splitProps, mergeProps } from "solid-js";
import Icon from "./Icon";

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: string;
  children?: JSX.Element;
  fullWidth?: boolean;
}

const Button: Component<ButtonProps> = (props) => {
  const merged = mergeProps({ variant: "primary", size: "md", fullWidth: false }, props);
  const [local, others] = splitProps(merged, ["variant", "size", "href", "icon", "children", "class", "fullWidth"]);

  const getClasses = () => {
    let classes = "inline-flex items-center justify-center font-bold transition-all gap-2 rounded-xl cursor-pointer";

    // Size
    if (local.size === "sm") classes += " px-4 py-2 text-sm";
    else if (local.size === "lg") classes += " px-8 py-4 text-lg";
    else classes += " px-6 py-2.5 text-sm md:text-base"; // md

    // Variant
    switch (local.variant) {
      case "primary":
        classes += " bg-primary-content hover:bg-primary-content-hover text-white shadow-lg shadow-primary/30";
        break;
      case "secondary":
        classes += " bg-surface border border-border-color hover:border-primary text-text-main";
        break;
      case "outline":
        classes += " border border-current hover:bg-surface";
        break;
      case "ghost":
        classes += " hover:bg-surface text-text-muted hover:text-primary";
        break;
      case "white":
        classes += " bg-white text-primary-content hover:bg-gray-100 shadow-lg";
        break;
    }

    if (local.fullWidth) classes += " w-full";

    // Add custom classes last to allow overrides
    if (local.class) classes += ` ${local.class}`;

    return classes;
  };

  if (local.href) {
    return (
      <a href={local.href} class={getClasses()} {...(others as JSX.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {local.icon && <Icon name={local.icon} />}
        {local.children}
      </a>
    );
  }

  return (
    <button class={getClasses()} {...others}>
      {local.icon && <Icon name={local.icon} />}
      {local.children}
    </button>
  );
};

export default Button;
