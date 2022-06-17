// Routing imports
import { Routes, Route, Navigate } from "react-router-dom";

// Custom components imports
import Header from "../components/Header";
import ExploreResidences from "../pages/ExploreResidences";
import DetailedExploreResidences from "../pages/DetailedExploreResidences";
import TestPhone from "../pages/TestPhone";

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
        <Route path='/test' element={<TestPhone />} />
        <Route
          path='*'
          element={<Navigate to='/explore-residences' replace />}
        />
      </Routes>
    </>
  );
};

export default Routing;
