import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    // Default to light theme unless user explicitly saved a preference
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    setMounted(true);
    
    // Apply theme to document
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return { theme, toggleTheme, mounted };
};

