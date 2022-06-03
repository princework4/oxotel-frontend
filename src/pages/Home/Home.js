import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ImageSlider from "../../components/Slider";
import { HeroSliderImages } from "../../utils/SliderImages/SliderImages";
import { HeroSliderSettings } from "../../utils/SliderSetting/SliderSetting";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <Header />
      </div>
      <div>
        <ImageSlider settings={HeroSliderSettings} images={HeroSliderImages} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
