import { createSignal, type Component, onMount } from "solid-js";
import Icon from "./Icon";

const ThemeSwitcher: Component = () => {
  const [isDark, setIsDark] = createSignal(false);

  onMount(() => {
    // Initialize state based on document class or storage
    // The script in LandingLayout should have already set the class
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  });

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark()) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      class="flex items-center justify-center p-2 rounded-lg text-text-muted hover:text-primary hover:bg-surface/50 transition-colors"
      aria-label="Toggle theme"
      title={isDark() ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <Icon name={isDark() ? "light_mode" : "dark_mode"} size="20px" />
    </button>
  );
};

export default ThemeSwitcher;
