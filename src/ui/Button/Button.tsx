import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
  backgroundColor?: string; // Optionaler Prop für die Hintergrundfarbe
}

const Button: React.FC<ButtonProps> = ({ onClick, label, backgroundColor }) => {
  return (
    <button
      onClick={onClick}
      className="ui-button"
      style={{ backgroundColor }} // Setze die Hintergrundfarbe dynamisch
    >
      {label}
    </button>
  );
};

export default Button;