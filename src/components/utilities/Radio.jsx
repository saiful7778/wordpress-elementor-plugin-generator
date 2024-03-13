import { useField } from "formik";

const Radio = ({ options, name }) => {
  const data = useField(name);

  return (
    <div>
      {options.map((option) => (
        <RadioItem
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

const RadioItem = (props) => {
  const [field] = useField(props);
  return (
    <label className="m-1 cursor-pointer text-sm" htmlFor={props.id}>
      <input
        type="radio"
        id={props.id}
        {...field}
        {...props}
        checked={field.value === props.value}
      />
      <span className="ml-1" title={`value is: ${props.value}`}>
        {props.label}
      </span>
    </label>
  );
};

export default Radio;
