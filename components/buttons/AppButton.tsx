import { MouseEventHandler, ReactNode } from "react";

const colorClasses = {
  orange: "bg-orange-500 text-white hover:bg-orange-400",
  blue: "bg-blue-500 text-white hover:bg-blue-400",
  green: "bg-green-500 text-white hover:bg-green-400",
  red: "bg-red-500 text-white hover:bg-red-400",
  purple: "bg-purple-500 text-white hover:bg-purple-400",
  yellow: "bg-yellow-500 text-white hover:bg-yellow-400",
  gray: "bg-gray-500 text-white hover:bg-gray-400",
  white: "bg-white text-gray-800 hover:bg-gray-200 border border-gray-300",
};

const AppButton = ({
  label,
  onClick,
  leftIcon,
  rightIcon,
  size = "md",
  className,
  type,
  color = "orange",
}: {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  color?: keyof typeof colorClasses;
}) => {
  const sizeClasses = {
    sm: "px-2 py-1",
    md: "px-4 py-2",
    lg: "px-6 py-3",
  };
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
  };
  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} cursor-pointer rounded-md flex items-center justify-center gap-2 ${colorClasses[color]} transition-all duration-100 ${className}`}
      type={type}
    >
      {leftIcon}
      <p className={textSizeClasses[size]}>{label}</p>
      {rightIcon}
    </button>
  );
};

export default AppButton;
