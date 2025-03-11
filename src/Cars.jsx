import Header from "./Header";
import SearchSection from "./SearchSection";
import CarList from "./CarList";

import { useState } from "react";

function Cars() {
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

  const [searchCar, setSearchCar] = useState("");
  const [isPremiumOnly, setIsPremiumOnly] = useState(false);

  const filteredCars = isPremiumOnly
    ? CARS.filter((car) => car.isPremium)
    : CARS;

  return (
    <div className="max-w-7xl m-auto p-2">
      <Header />
      <SearchSection
        searchCar={searchCar}
        onSearchCar={setSearchCar}
        isPremiumOnly={isPremiumOnly}
        onTogglePremium={() => setIsPremiumOnly((prev) => !prev)}
      />
      <CarList searchCar={searchCar} cars={filteredCars} />
    </div>
  );
}

export default Cars;
