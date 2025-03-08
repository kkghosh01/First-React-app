import Header from "./Header";
import SearchSection from "./SearchSection";
import CarList from "./CarList";

function Cars() {
  return (
    <div className="max-w-7xl m-auto p-2">
      <Header />
      <SearchSection />
      <CarList />
    </div>
  );
}

export default Cars;
