import CarDetails from "./CarDetails";
import PropTypes from "prop-types";

const CARS = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

function CarList() {
  return (
    <ul className="grid grid-cols-3 gap-3">
      {CARS.map((car) => (
        <li
          key={car.id}
          className="p-3 border border-gray-300 rounded-md shadow"
        >
          <CarDetails
            title={car.title}
            brand={car.brand}
            year={car.year}
            price={car.price}
            premium={car.isPremium}
          />
        </li>
      ))}
    </ul>
  );
}

CarList.prototypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
  }),
};

export default CarList;
