import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, backgroundColor, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="ui-button"
      style={{ backgroundColor }} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
