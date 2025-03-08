import Search from "./Search";
import CheckList from "./CheckList";

function SearchSection() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-4">
      <Search />
      <CheckList />
    </div>
  );
}

export default SearchSection;
