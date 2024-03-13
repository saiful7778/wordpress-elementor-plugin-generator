import { useField } from "formik";
import CheckboxItem from "@/components/utilities/formik/CheckboxItem";

const Checkbox = ({ options, name, label }) => {
  const data = useField(name);
  return (
    <div>
      <span>{label}</span>
      {options.map((option) => (
        <CheckboxItem
          key={option.value}
          id={option.value}
          label={option.text}
          name={name}
          value={option.value}
        />
      ))}
      {data[1].error && data[1].touched ? (
        <p className="mt-1 text-xs text-red-500">{data[1].error}</p>
      ) : null}
    </div>
  );
};

export default Checkbox;
