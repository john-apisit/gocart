const SelectColor = ({
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
            className={`p-[1px] bg-white border  cursor-pointer hover:border-gray-800 transition-all duration-150  ${
              value === o ? "border-gray-800" : "border-gray-300"
            }`}
          >
            <p
              className={`px-2 py-1  w-8 h-8 ${
                value === o ? "bg-gray-800 text-gray-100" : ""
              }`}
              style={{
                backgroundColor: o.toLocaleLowerCase(),
              }}
            ></p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
