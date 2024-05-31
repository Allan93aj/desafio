import Slider from "react-slick";
import './SlideAlunos.scss'
import Slider1 from '../../img/sld1.webp'


function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="sld-cards">
        <div className="cards">
          <img src={Slider1} alt="" />
        </div>
        <div className="cards">
        <img src={Slider1} alt="" />
        </div>
        <div className="cards">
        <img src={Slider1} alt="" />
        </div>
        <div className="cards">
        <img src={Slider1} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
