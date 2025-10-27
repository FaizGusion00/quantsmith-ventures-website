import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-muted/50 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 transition-all duration-300 flex items-center justify-center group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-accent transition-all duration-500 ${
            theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-accent transition-all duration-500 ${
            theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
      
      {/* Ripple Effect */}
      <span className="absolute inset-0 rounded-lg bg-accent/20 opacity-0 group-active:opacity-100 group-active:scale-150 transition-all duration-300" />
    </button>
  );
};

export default ThemeToggle;

