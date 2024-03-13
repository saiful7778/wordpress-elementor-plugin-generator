import { focus } from "@/lib/styles";
import cn from "@/lib/utils/cn";
import { useField } from "formik";

const style = {
  base: "border border-gray-700 select-none appearance-none rounded-md bg-gray-900 px-3 py-2 text-sm",
  error: "border-red-600 text-red-600",
  size: {
    xs: "min-w-52",
    sm: "min-w-64",
    md: "min-w-80",
  },
};

const Select = ({
  options,
  className,
  defaultValue,
  size = "xs",
  ...props
}) => {
  const [field, { touched, error }] = useField(props);

  return (
    <div>
      <select
        className={cn(
          "select",
          style.base,
          focus.base,
          size === "xs" && style.size.xs,
          size === "sm" && style.size.sm,
          size === "md" && style.size.md,
          error && touched && style.error,
          error && touched && focus.error,
          (error && touched) || field.value || "text-gray-500",
          className,
        )}
        {...field}
      >
        <option value="" disabled>
          {defaultValue}
        </option>
        {options?.map((data) => (
          <option key={data.value} value={data.value}>
            {data.text}
          </option>
        ))}
      </select>
      {error && touched ? (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      ) : null}
    </div>
  );
};

export default Select;
