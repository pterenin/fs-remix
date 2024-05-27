type InputFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  defaultValue?: string;
};

export const InputField = ({
  label,
  name,
  placeholder,
  type,
  defaultValue,
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        defaultValue={defaultValue || ""}
        placeholder={placeholder}
      />
    </div>
  );
};
