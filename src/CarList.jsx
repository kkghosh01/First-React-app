import CarDetails from "./CarDetails";
import PropTypes from "prop-types";

function CarList({ searchCar, cars }) {
  const list = [];
  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(searchCar.toLowerCase()) === -1) {
      return;
    }
    list.push(
      <CarDetails
        key={car.id}
        title={car.title}
        brand={car.brand}
        year={car.year}
        price={car.price}
        premium={car.isPremium}
      />
    );
  });
  return <div className="grid grid-cols-3 gap-3"> {list} </div>;
}

CarList.propTypes = {
  searchCar: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
};

export default CarList;
