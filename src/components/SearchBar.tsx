interface searchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: searchBarProps) => {
  return (
    <div>
      <input
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
