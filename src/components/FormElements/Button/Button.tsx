import React from "react";
import "./Button.sass";

export interface ButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({ buttonText, type }) => {
  return (
    <button className="custom-button" type={type ? type : undefined}>
      {buttonText}
    </button>
  );
};
