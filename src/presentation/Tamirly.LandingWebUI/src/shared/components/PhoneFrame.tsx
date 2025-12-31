import { type Component, type JSX, mergeProps, Show } from "solid-js";

export interface PhoneFrameProps {
  children: JSX.Element;
  class?: string;
  showNotch?: boolean;
}

const PhoneFrame: Component<PhoneFrameProps> = (props) => {
  const merged = mergeProps({ class: "", showNotch: true }, props);

  return (
    <div
      class={`relative w-[300px] h-[650px] bg-black rounded-[48px] border-[10px] border-gray-800 shadow-2xl overflow-hidden ${merged.class}`}
    >
      {/* Notch/Top Bar mock */}
      <Show when={merged.showNotch}>
        <div class="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-t-[1.7rem] z-20 flex justify-center pointer-events-none">
          <div class="w-20 h-4 bg-black rounded-b-xl"></div>
        </div>
      </Show>

      {/* Screen Content */}
      <div class="w-full h-full flex flex-col relative overflow-hidden pt-10 pb-4 bg-background">{merged.children}</div>
    </div>
  );
};

export default PhoneFrame;
