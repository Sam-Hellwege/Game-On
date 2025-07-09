// FrostedButton.tsx

import React from "react";
import type { ButtonHTMLAttributes } from "react";

interface FrostedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const FrostedButton: React.FC<FrostedButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`rounded-md cursor-pointer focus:outline-none ${className}`}
      style={{
        padding: "10px",
        margin: "5px",
        borderRadius: "10px",
        background: "rgba(173, 216, 230, 0.04)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(192, 192, 192, 0.6)",
        outline: "none",
        ...props.style,
      }}
    >
      {children}
    </button>
  );
};

export default FrostedButton;
