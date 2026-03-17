'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1] as Theme;

    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, []); 

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
if (theme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light"); 
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }

    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}