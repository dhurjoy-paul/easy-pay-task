"use client";
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "fill",
  bgColor = "#2E68FD",
  textColor = "#FFFFFF",
  outlineColor = "#FFFFFF",
  className = "",
  onClick,
  type = "button",
}) {
  const baseClasses = "rounded-full transition-colors duration-200 ease-in-out px-6 py-2 text-center select-none cursor-pointer font-outfit font-semibold text-base leading-normal";

  const fillStyle = {
    backgroundColor: bgColor,
    color: textColor,
    border: "2px solid transparent",
  };

  const outlineStyle = {
    backgroundColor: "transparent",
    color: textColor || outlineColor,
    border: `1px solid ${outlineColor}`,
  };

  const dynamicStyle = variant === "fill" ? fillStyle : outlineStyle;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${className}`}
      style={dynamicStyle}
    >
      {children}
    </motion.button>
  );
}
