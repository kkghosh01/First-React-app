import Search from "./Search";
import CheckList from "./CheckList";
import PropTypes from "prop-types";

function SearchSection({
  searchCar,
  onSearchCar,
  isPremiumOnly,
  onTogglePremium,
}) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-4">
      <Search
        searchCar={searchCar}
        onSearchCar={onSearchCar}
        onTogglePremium={onTogglePremium}
      />
      <CheckList
        isPremiumOnly={isPremiumOnly}
        onTogglePremium={onTogglePremium}
      />
    </div>
  );
}

SearchSection.propTypes = {
  searchCar: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  isPremiumOnly: PropTypes.bool.isRequired,
  onTogglePremium: PropTypes.func.isRequired,
};

export default SearchSection;
