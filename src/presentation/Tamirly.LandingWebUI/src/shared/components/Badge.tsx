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

  const getClasses = () => {
    let classes = `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${merged.class}`;

    const colorMap: Record<string, string> = {
      primary: "primary",
      success: "green",
      warning: "yellow",
      error: "red",
      orange: "orange",
      default: "gray",
    };

    const c = colorMap[merged.color as string] || "primary";

    if (merged.variant === "solid") {
      classes += ` bg-${c}-600 text-white border border-${c}-600`;
    } else if (merged.variant === "outline") {
      classes += ` text-${c}-500 border border-${c}-500`;
    } else {
      // subtle
      // Special handling for predefined colors in Tailwind config vs dynamic classes
      if (c === "primary") {
        classes += ` bg-primary/10 text-primary border border-primary/20`;
      } else {
        classes += ` bg-${c}-500/10 text-${c}-500 border border-${c}-500/20`;
      }
    }

    return classes;
  };

  return (
    <div class={getClasses()}>
      <Show when={merged.animatePulse}>
        <span
          class={`w-2 h-2 rounded-full animate-pulse ${merged.color === "primary" ? "bg-primary" : `bg-${merged.color}-500`}`}
        ></span>
      </Show>
      {merged.children}
    </div>
  );
};

export default Badge;
