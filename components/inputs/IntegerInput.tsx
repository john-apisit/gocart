"use client";

import { MinusCircle, MinusIcon, PlusCircle, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const IntegerInput = ({
  value,
  onChange,
  className,
  label,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  label: string;
}) => {
  const [count, setCount] = useState(value);

  // Sync internal state with external value changes
  useEffect(() => {
    setCount(value);
  }, [value]);

  const increaseValue = (increment: number) => {
    const newValue = count + increment;
    setCount(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <label className="pb-2">{label}</label>
      <div className="flex items-center gap-4">
        <div
          onClick={() => increaseValue(-1)}
          className="bg-gray-50 hover:bg-gray-200 h-8 w-8 flex items-center justify-center text-gray-800 border border-gray-300 cursor-pointer"
        >
          <MinusIcon width={16} />
        </div>
        <p>{count}</p>
        <div
          onClick={() => increaseValue(1)}
          className="bg-gray-50 hover:bg-gray-200 h-8 w-8 flex items-center justify-center text-gray-800 border border-gray-300 cursor-pointer"
        >
          <PlusIcon width={16} />
        </div>
      </div>
    </div>
  );
};

export default IntegerInput;
