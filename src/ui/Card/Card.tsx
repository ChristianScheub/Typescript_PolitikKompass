import React, { CSSProperties, ReactNode } from "react";
import "./Card.css";

interface CardProps {
    children: ReactNode;
    style?: CSSProperties;
  }

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div className="card-container" style={style}>
      {children}
    </div>
  );
};

export default Card;