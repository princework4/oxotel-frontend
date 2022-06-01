import Footer from "../../components/Footer";
import ImageSlider from "../../components/Slider";
import { HeroSliderImages } from "../../utils/SliderImages/SliderImages";
import { HeroSliderSettings } from "../../utils/SliderSetting/SliderSetting";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <ImageSlider settings={HeroSliderSettings} images={HeroSliderImages} />
      </div>
      {/* <ImageSlider /> */}
      <Footer />
    </div>
  );
};

export default Home;
