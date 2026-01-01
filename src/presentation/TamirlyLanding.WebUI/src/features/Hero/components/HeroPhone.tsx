import { type Component } from "solid-js";
import PhoneFrame from "@tamirly-landing-webui/shared/components/PhoneFrame";
interface HeroPhoneProps {
  imageSrcDark: string;
  imageSrcLight: string;
}

const HeroPhone: Component<HeroPhoneProps> = (props) => {
  // Use aspect-ratio CSS to maintain proper proportions and prevent layout shift
  // Images are optimized to 265px width, with ~2.17 aspect ratio (574px height)
  return (
    <div class="relative transition-transform duration-500 hover:rotate-0 rotate-[-5deg] z-20">
      <PhoneFrame showNotch={false}>
        <img
          src={props.imageSrcLight}
          alt="Tamirly App Screenshot Light Mode"
          width="265"
          height="574"
          class="w-full h-full object-contain rounded-2xl dark:hidden"
          style="aspect-ratio: 265/574;"
          loading="eager"
          fetchpriority="high"
        />
        <img
          src={props.imageSrcDark}
          alt="Tamirly App Screenshot Dark Mode"
          width="265"
          height="574"
          class="w-full h-full object-contain rounded-2xl hidden dark:block"
          style="aspect-ratio: 265/574;"
          loading="eager"
          fetchpriority="high"
        />
      </PhoneFrame>
    </div>
  );
};

export default HeroPhone;
