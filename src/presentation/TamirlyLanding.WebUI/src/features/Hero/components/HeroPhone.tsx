import { type Component } from "solid-js";
import PhoneFrame from "@tamirly-landing-webui/shared/components/PhoneFrame";
interface HeroPhoneProps {
  imageSrcDark: string;
  imageSrcLight: string;
}

const HeroPhone: Component<HeroPhoneProps> = (props) => {
  return (
    <div class="relative transition-transform duration-500 hover:rotate-0 rotate-[-5deg] z-20">
      <PhoneFrame showNotch={false}>
        <img
          src={props.imageSrcLight}
          alt="Tamirly App Screenshot Light Mode"
          width="384"
          height="832"
          class="w-full h-full object-contain rounded-2xl dark:hidden"
          loading="eager"
          fetchpriority="high"
        />
        <img
          src={props.imageSrcDark}
          alt="Tamirly App Screenshot Dark Mode"
          width="384"
          height="832"
          class="w-full h-full object-contain rounded-2xl hidden dark:block"
          loading="eager"
          fetchpriority="high"
        />
      </PhoneFrame>
    </div>
  );
};

export default HeroPhone;
