import Link from "next/link";
import cn from "@/lib/utils/cn";
import { focus, button } from "@/lib/styles";

const Button = ({
  children,
  className,
  onClick,
  type = "button",
  variant,
  size = "md",
  shape,
  href,
  ...props
}) => {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? Link : "button";
  return (
    <Component
      onClick={onClick}
      className={cn(
        button.base,
        variant === "primary" && button.primary,
        variant === "primary-outline" && button.outline,
        variant === "confirm" && button.confirm,
        variant === "cancel" && button.cancel,
        button.size[size],
        focus.base,
        shape === "circle" && button.shape.circle,
        shape === "icon-text-button" && button.shape["icon-text-button"],
        shape === "icon-button" && button.shape["icon-button"],
        className,
      )}
      href={href}
      type={isLink ? undefined : type}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
