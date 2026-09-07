import React, { useEffect, useRef } from "react";

interface searchBarProps {
  onSearchsubmit: (value: string) => void;
}

const SearchBar = ({ onSearchsubmit }: searchBarProps) => {
  const searchref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent): void => {
    e.preventDefault();
    if (searchref.current) {
      onSearchsubmit(searchref.current.value);
    }
  };

  useEffect(() => {
    searchref.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={searchref}
        type="text"
        name="search"
        id="search"
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
