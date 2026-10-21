import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 1. Initialize theme state from localStorage, defaulting to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 2. Update the HTML data-theme attribute whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Handle toggle switch change
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Sun Icon */}
      <span className=" text-sm text-gray-400 sm:block">Light</span>
      
      {/* daisyUI Toggle Switch */}
      <input
        type="checkbox"
        className="toggle toggle-primary bg-[#6366F1]"
        onChange={handleToggle}
        checked={theme === "dark"}
      />
      
      {/* Moon Icon */}
      <span className="hidden text-sm text-gray-400 sm:block"> Dark</span>
    </div>
  );
}
