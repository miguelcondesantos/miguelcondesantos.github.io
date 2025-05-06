
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { toast } = useToast();

  // Check for user's preferred color scheme and saved preferences
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "dark" || 
        (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Update the document class and save to localStorage
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      toast({
        title: "Dark mode activated",
        description: "Dark theme enabled",
        duration: 1500,
      });
    } else {
      document.documentElement.classList.remove("dark");
      toast({
        title: "Light mode activated",
        description: "Light theme enabled",
        duration: 1500,
      });
    }
    
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 border-gray-200 dark:border-gray-700"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-slate-700" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
