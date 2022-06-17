// Routing imports
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// Custom components imports
import Header from "../components/Header";
import ExploreResidences from "../pages/ExploreResidences";
import DetailedExploreResidences from "../pages/DetailedExploreResidences";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-residences" element={<ExploreResidences />} />
        <Route
          path="/explore-residences/:id"
          element={<DetailedExploreResidences />}
        />
      </Routes>
    </>
  );
};

export default Routing;
