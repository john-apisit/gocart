"use client";

import { User } from "lucide-react";
import { useState } from "react";
import ShoppingCartIcon from "../carts/ShoppingCartIcon";
import SearchInput from "../../components/inputs/SearchInput";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 text-gray-400">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/shop?search=${searchText}`);
        }}
      >
        <SearchInput searchText={searchText} onSearch={setSearchText} />
      </form>
      <ShoppingCartIcon />

      {/* User Actions */}
      <div className="flex items-center gap-2 cursor-pointer">
        <User className="" />
        <span>Sign in</span>
      </div>
    </div>
  );
};

export default UserMenu;
