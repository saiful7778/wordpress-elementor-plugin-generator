import cn from "@/lib/utils/cn";
import { input, focus } from "@/lib/styles";
import { useId } from "react";

const Textarea = ({
  className,
  name,
  label,
  required,
  placeholder,
  value,
  onChange,
  disabled,
  textLimit,
}) => {
  const inputId = useId();

  return (
    <div>
      <div className="relative">
        {label && (
          <label
            htmlFor={inputId}
            className="m-1 inline-block cursor-pointer text-xs font-medium leading-tight"
          >
            {label}
            {required && <span className="ml-1 text-red-600">*</span>}
          </label>
        )}
        <textarea
          id={inputId}
          className={cn(input.base, focus.base, className)}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          maxLength={textLimit}
        ></textarea>
        <div className="absolute bottom-2 right-2.5 z-10 text-xs text-gray-400">
          {value.length}/{textLimit}
        </div>
      </div>
    </div>
  );
};

export default Textarea;
