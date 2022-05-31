// Routing imports
import { Routes, Route } from "react-router-dom";

// Custom components imports
import Header from "../components/Header";
import ExploreResidences from "../pages/ExploreResidences";
import DetailedExploreResidences from "../pages/DetailedExploreResidences";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/explore-residences' element={<ExploreResidences />} />
        <Route
          path='/explore-residences/:id'
          element={<DetailedExploreResidences />}
        />
      </Routes>
    </>
  );
};

export default Routing;
