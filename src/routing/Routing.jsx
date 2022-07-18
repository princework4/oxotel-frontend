// Routing imports
import { Routes, Route, Navigate } from "react-router-dom";

// Custom components imports
import Header from "../components/Header";
import ExploreResidences from "../pages/ExploreResidences";
import DetailedExploreResidences from "../pages/DetailedExploreResidences";
import TestPhone from "../pages/TestPhone";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs/AboutUs";
import PartnerWithUs from "../pages/PartnerWithUs";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-residences" element={<ExploreResidences />} />
        <Route
          path="/explore-residences/:id"
          element={<DetailedExploreResidences />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partner" element={<PartnerWithUs />} />

        <Route path="/test" element={<TestPhone />} />
        <Route
          path="*"
          element={<Navigate to="/explore-residences" replace />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
