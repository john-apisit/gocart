const SelectButton = ({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <label className="pb-2">{label}</label>
      <div className="flex items-center gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`p-[1px] bg-white border  cursor-pointer  ${
              value === o ? "border-gray-800" : "border-gray-300"
            }`}
          >
            <p
              className={`px-2 py-1 hover:bg-gray-800 hover:text-gray-100 ${
                value === o ? "bg-gray-800 text-gray-100" : ""
              }`}
            >
              {o}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectButton;
