import { useField } from "formik";

const CheckboxItem = ({ id, label, ...props }) => {
  const [field, { error, touched }] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label
        className="mb-1 block cursor-pointer text-sm text-gray-400"
        htmlFor={id}
      >
        <input type="checkbox" id={id} {...field} />
        <span className="ml-1">{label}</span>
      </label>
      {error && touched ? (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      ) : null}
    </>
  );
};

export default CheckboxItem;
