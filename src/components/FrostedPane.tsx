import React from "react";
import type { ReactNode, CSSProperties } from "react";

interface FrostedGlassPaneProps {
  children: ReactNode;
  full?: boolean;
  className?: string;
  style?: CSSProperties;
  borderless?: boolean;
}

const FrostedGlassPane: React.FC<FrostedGlassPaneProps> = ({
  children,
  full = false,
  className = '',
  style = {},
  borderless = false
}) => {
  return (
    <div
      className={className}
      style={{
        padding: "10px",
        margin: full ? "0" : "5px",
        borderRadius: "10px",
        background: "rgba(173, 216, 230, 0.04)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: borderless ? "none" : "1px solid rgba(192, 192, 192, 0.6)",
        width: full ? "100vw" : "auto",
        height: full ? "100vh" : "auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
};


export default FrostedGlassPane;
