import { type Component, mergeProps } from "solid-js";
import SvgIcon from "@packages/acore-solid/ui/components/SvgIcon";

// Import Icons
import androidSvg from "../assets/icons/android.svg?raw";
import checkMarkSvg from "../assets/icons/check_mark.svg?raw";
import closeSvg from "../assets/icons/close.svg?raw";
import moonSvg from "../assets/icons/moon.svg?raw";
import downloadSvg from "../assets/icons/download.svg?raw";
import historySvg from "../assets/icons/history.svg?raw";
import sunSvg from "../assets/icons/sun.svg?raw";
import menuSvg from "../assets/icons/menu.svg?raw";
import playCircleSvg from "../assets/icons/play-circle.svg?raw";
import searchSvg from "../assets/icons/search.svg?raw";
import translateSvg from "../assets/icons/translate.svg?raw";
import wifiOffSvg from "../assets/icons/wifi-off.svg?raw";
import buildSvg from "../assets/icons/build.svg?raw";
import expandMoreSvg from "../assets/icons/expand-more.svg?raw";

const iconMap: Record<string, string> = {
  android: androidSvg,
  check_circle: checkMarkSvg,
  close: closeSvg,
  dark_mode: moonSvg,
  download: downloadSvg,
  history: historySvg,
  light_mode: sunSvg,
  menu: menuSvg,
  play_circle: playCircleSvg,
  search: searchSvg,
  translate: translateSvg,
  wifi_off: wifiOffSvg,
  build: buildSvg,
  arrow_down: expandMoreSvg,
};

export interface IconProps {
  name: string;
  size?: number | string;
  class?: string;
}

const Icon: Component<IconProps> = (props) => {
  const merged = mergeProps({ size: 24, class: "" }, props);

  return (
    <SvgIcon
      svg={iconMap[merged.name] || ""}
      alt={merged.name}
      class={merged.class}
      style={{
        width: typeof merged.size === "number" ? `${merged.size}px` : merged.size,
        height: typeof merged.size === "number" ? `${merged.size}px` : merged.size,
      }}
    />
  );
};

export default Icon;
