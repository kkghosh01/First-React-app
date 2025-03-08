import PropTypes from "prop-types";

function CarDetails({ title, brand, year, price, premium }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="font-medium">Brand: {brand}</p>
      <p className="font-medium">Year: {year}</p>
      <p className="font-medium">Price: {price}</p>
      <p className="font-medium">Premium: {premium ? "Yes" : "No"}</p>
    </div>
  );
}

CarDetails.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  premium: PropTypes.bool.isRequired,
};

export default CarDetails;
