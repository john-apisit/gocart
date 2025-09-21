"use client";

import { User } from "lucide-react";
import { useState } from "react";
import SearchInput from "./inputs/SearchInput";
import ShoppingCartIcon from "../carts/ShoppingCartIcon";

const UserMenu = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex items-center gap-4 text-gray-400">
      <SearchInput onSearch={setSearchText} />
      <ShoppingCartIcon />

      {/* User Actions */}
      <div className="flex items-center gap-2 cursor-pointer">
        <User className="" />
        <span>Account</span>
      </div>
    </div>
  );
};

export default UserMenu;
