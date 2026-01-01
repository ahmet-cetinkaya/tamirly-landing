import { type Component } from "solid-js";
import Icon from "@tamirly-landing-webui/shared/components/Icon";

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: Component<FeatureCardProps> = (props) => {
  return (
    <div class="p-8 rounded-2xl bg-surface-dark border border-gray-800 hover:border-primary/50 transition-all group h-full">
      <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
        <Icon name={props.icon} size={28} class="fill-current" />
      </div>
      <h3 class="text-xl font-bold text-text-main mb-3">{props.title}</h3>
      <p class="text-text-muted leading-relaxed">{props.description}</p>
    </div>
  );
};

export default FeatureCard;
