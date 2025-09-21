"use client";
import { useSearchParams } from "next/navigation";
import { useProductStore } from "./store/productStore";
import { useEffect } from "react";

const SearchTitle = () => {
  const { searchText, setSearchText } = useProductStore();
  const param = useSearchParams();
  const search = param.get("search");

  useEffect(() => {
    setSearchText(search ?? "");
  }, [search]);

  return (
    <h2 className="text-lg text-gray-500 font-bold pt-4 pb-4">
      {searchText ? `Search Products for ${searchText}` : "All Products"}
    </h2>
  );
};

export default SearchTitle;
