import { Search } from "lucide-react";
import { useRef, useState } from "react";

const SearchInput = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-4">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className={`outline-none ring-2 ring-gray-200 rounded-md py-1 px-2 transition-all duration-300 ease-in-out ${
          showSearch ? "opacity-100 w-48" : "opacity-0 w-0"
        }`}
      />
      <Search
        onClick={() => {
          setShowSearch((prev) => !prev);
          if (searchInputRef.current) {
            setTimeout(() => {
              searchInputRef.current?.focus();
            }, 100);
          }
        }}
        className="text-gray-400 hover:text-gray-500 cursor-pointer transition-all duration-200"
      />
    </div>
  );
};

export default SearchInput;
