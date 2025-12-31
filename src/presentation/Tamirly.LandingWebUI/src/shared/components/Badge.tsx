import { type Component, type JSX, Show, mergeProps } from "solid-js";

export interface BadgeProps {
  variant?: "solid" | "outline" | "subtle";
  color?: "primary" | "success" | "warning" | "error" | "orange" | "default";
  children: JSX.Element;
  animatePulse?: boolean;
  class?: string;
}

const Badge: Component<BadgeProps> = (props) => {
  const merged = mergeProps({ variant: "subtle", color: "primary", animatePulse: false, class: "" }, props);

  const styles = {
    base: `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${merged.class}`,
    variants: {
      solid: {
        primary: "bg-primary text-white border border-primary",
        success: "bg-green-600 text-white border border-green-600",
        warning: "bg-yellow-600 text-white border border-yellow-600",
        error: "bg-red-600 text-white border border-red-600",
        orange: "bg-orange-600 text-white border border-orange-600",
        default: "bg-gray-600 text-white border border-gray-600",
      },
      outline: {
        primary: "text-primary border border-primary",
        success: "text-green-500 border border-green-500",
        warning: "text-yellow-500 border border-yellow-500",
        error: "text-red-500 border border-red-500",
        orange: "text-orange-500 border border-orange-500",
        default: "text-gray-500 border border-gray-500",
      },
      subtle: {
        primary: "bg-primary/10 text-primary border border-primary/20",
        success: "bg-green-500/10 text-green-500 border border-green-500/20",
        warning: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
        error: "bg-red-500/10 text-red-500 border border-red-500/20",
        orange: "bg-orange-500/10 text-orange-500 border border-orange-500/20",
        default: "bg-gray-500/10 text-gray-500 border border-gray-500/20",
      },
    },
    pulse: {
      primary: "bg-primary",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      error: "bg-red-500",
      orange: "bg-orange-500",
      default: "bg-gray-500",
    },
  };

  const getClasses = () => {

    return `${styles.base} ${styles.variants[merged.variant as keyof typeof styles.variants][merged.color as keyof typeof styles.pulse]}`;
  };

  const pulseClass = () =>
    `w-2 h-2 rounded-full animate-pulse ${styles.pulse[merged.color as keyof typeof styles.pulse]}`;

  return (
    <div class={getClasses()}>
      <Show when={merged.animatePulse}>
        <span class={pulseClass()}></span>
      </Show>
      {merged.children}
    </div>
  );
};

export default Badge;
