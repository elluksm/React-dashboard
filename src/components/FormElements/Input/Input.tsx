import React from "react";
import "./Input.sass";

export interface InputProps {
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
  onValueChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  value,
  label,
  placeholder,
  type,
  onValueChange,
}) => {
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type ? type : "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};
