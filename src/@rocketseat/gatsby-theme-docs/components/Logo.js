import React from "react";
import mohammedElzanatyLogoDark from "../assets/logo-dark.png";
import mohammedElzanatyLogoLight from "../assets/logo-light.png";
import { ThemeContext } from "./Layout/styles";

/**
 * @description   Main Logo Component
 */

const Logo = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="brand">
      <img
        src={theme === 'dark' ? mohammedElzanatyLogoLight : mohammedElzanatyLogoDark}
        alt="mohammed elzanaty logo"
        style={{ width: 80 }}
      />
      Younisfy
    </div>
  )
};

export default Logo;
