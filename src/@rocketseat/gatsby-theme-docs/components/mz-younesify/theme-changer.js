import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default ({ setTheme }) => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div className="theme-toggle">
        <FontAwesomeIcon
          icon={faMoon}
          style={{ color: theme === "light" ? "black" : "white" }}
          onClick={() => {
            if (theme === "light") {
              setTheme("light");
              toggleTheme("dark");
            } else {
              setTheme("dark");
              toggleTheme("light");
            }
          }}
        />
      </div>
    )}
  </ThemeToggler>
);
