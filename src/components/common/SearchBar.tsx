import { useState, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    const value = search.trim();

    if (!value) return;

    navigate(`/explore/search/${encodeURIComponent(value.toLowerCase())}`);
  }, [search, navigate]);

  return (
    <div className="mt-6 flex items-center gap-3">
      {/* Search Input */}
      <div className="relative flex-1 min-w-0">
        <button
          onClick={handleSearch}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-500
            hover:text-[#53B175]
            transition
          "
          aria-label="Search"
        >
          <FiSearch className="text-lg" />
        </button>

        <input
          type="text"
          placeholder="Search Store"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            w-full
            h-14
            pl-12
            pr-4
            rounded-xl
            bg-[#F2F3F2]
            border
            border-transparent
            outline-none
            text-[#181725]
            placeholder:text-gray-500
            focus:border-[#53B175]
            focus:ring-2
            focus:ring-[#53B175]/20
            transition
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;
