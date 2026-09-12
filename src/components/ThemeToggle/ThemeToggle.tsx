import "./theme-toggle.scss";
import type { Theme } from "../../hooks/useTheme";

export default function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="theme_toggle"
      onClick={onToggle}
      aria-label="Toggle colour theme"
    >
      <span className="theme_toggle_dot" />
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
