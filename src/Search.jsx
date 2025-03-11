import PropTypes from "prop-types";

function Search({ searchCar, onSearchCar }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search cars.."
        value={searchCar}
        onChange={(event) => onSearchCar(event.target.value)}
        className="border border-gray-400 p-1 rounded-md w-full"
      />
    </form>
  );
}

Search.propTypes = {
  searchCar: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  onTogglePremium: PropTypes.func.isRequired,
};

export default Search;
