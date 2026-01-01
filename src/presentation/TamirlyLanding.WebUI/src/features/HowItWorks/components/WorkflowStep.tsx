import { type Component } from "solid-js";
import PhoneFrame from "@tamirly-landing-webui/shared/components/PhoneFrame";

export interface WorkflowStepProps {
  stepNumber: string;
  title: string;
  description: string;
  variant: "select-appliance" | "enter-code" | "fix-it";
  imageSrcDark: string;
  imageSrcLight: string;
}

const WorkflowStep: Component<WorkflowStepProps> = (props) => {
  return (
    <div class="flex flex-col items-center text-center group">
      <div class="w-20 h-20 rounded-full bg-surface-dark border-4 border-background-dark shadow-xl flex items-center justify-center mb-6 relative z-10">
        <span class="text-2xl font-bold text-primary">{props.stepNumber}</span>
      </div>

      <h3 class="text-xl font-bold text-text-main mb-2">{props.title}</h3>
      <p class="text-text-muted mb-8">{props.description}</p>

      <div class={`relative transition-transform duration-500 transform group-hover:-translate-y-2 z-0`}>
        <PhoneFrame class="w-[200px] h-[430px] rounded-[2rem] border-4" showNotch={false}>
          <img
            src={props.imageSrcLight}
            alt={props.title}
            width="200"
            height="430"
            class="w-full h-full object-contain rounded-2xl dark:hidden"
            loading="lazy"
          />
          <img
            src={props.imageSrcDark}
            alt={props.title}
            width="200"
            height="430"
            class="w-full h-full object-contain rounded-2xl hidden dark:block"
            loading="lazy"
          />
        </PhoneFrame>
      </div>
    </div>
  );
};

export default WorkflowStep;
