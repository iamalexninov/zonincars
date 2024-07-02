export const InputField = ({ type, label, placeholder, name, setValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="pl-2 text-neutral-600">
          {label}
        </label>
      )}
      {name && (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          className="p-5 text-base border border-l-neutral-400 rounded-full outline-none"
          onChange={handleChange}
        />
      )}
    </div>
  );
};
