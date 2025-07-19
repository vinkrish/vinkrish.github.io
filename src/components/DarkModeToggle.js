import React, { useState, useEffect } from "react";
import Sun from "../images/sun.svg";
import Moon from "../images/moon-bats.svg";

function getDefaultTheme() {
  if (typeof window !== "undefined") {
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  }
  return 'dark';
}

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(getDefaultTheme());

  useEffect(() => {
    if (isDark === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    window.localStorage.setItem('theme', isDark);
  }, [isDark]);

  return (
    <div
        onClick={() => setIsDark(isDark === "dark" ? "light" : "dark")}
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: '32px', height: '32px', cursor: "pointer", marginTop: '8px', paddingTop: '8px' }}
    >
        {isDark === "dark" ? (
            <img src={Sun} alt="sun" style={{ width: "24px", height: "24px", display: "block" }}/>
        ) : (
            <img src={Moon} alt="moon" style={{ width: "24px", height: "24px", display: "block" }} />
        )}
    </div>
  );
};

export default DarkModeToggle;