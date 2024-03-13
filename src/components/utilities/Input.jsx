import cn from "@/lib/utils/cn";
import { input, focus } from "@/lib/styles";
import { useId } from "react";

const Input = ({
  type,
  name,
  label,
  required,
  placeholder,
  value,
  onChange,
  disabled,
  className,
}) => {
  const inputId = useId();

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className="m-1 inline-block cursor-pointer text-xs font-medium leading-tight"
        >
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </label>
      )}
      <input
        className={cn(input.base, focus.base, className)}
        name={name}
        required={required}
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
