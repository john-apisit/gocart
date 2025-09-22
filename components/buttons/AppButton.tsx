import { MouseEventHandler, ReactNode } from "react";

const AppButton = ({
  label,
  onClick,
  leftIcon,
  rightIcon,
  size = "md",
  className,
  type,
}: {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
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
      className={`${sizeClasses[size]} cursor-pointer rounded-md flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-400 transition-all duration-100 ${className}`}
      type={type}
    >
      {leftIcon}
      <p className={textSizeClasses[size]}>{label}</p>
      {rightIcon}
    </button>
  );
};

export default AppButton;
