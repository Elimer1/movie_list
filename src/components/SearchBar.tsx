import { useEffect, useRef } from "react";

interface searchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: searchBarProps) => {
  const searchref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchref.current?.focus();
  }, []);
  return (
    <div>
      <input
        ref={searchref}
        type="text"
        name="search"
        id="search"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
