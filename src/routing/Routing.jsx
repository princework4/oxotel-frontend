// Routing imports
import { Routes, Route } from "react-router-dom";

// Custom components imports
import Header from "../components/Header";
import ExploreResidences from "../pages/ExploreResidences";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/explore-residences' element={<ExploreResidences />} />
      </Routes>
    </>
  );
};

export default Routing;
