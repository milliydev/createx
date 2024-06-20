import React from "react";
import Slider from "react-slick";
import imgf from '../image/testimonial.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>

      <div className="testimon">TESTIMONIALS</div>
      <div className="whats">What our students say</div>
    <Slider className="slider" {...settings}>
      <div>
       <div className="img-1"></div>
      </div>
      <div>
      <div className="img-2"></div>
      </div>
      <div>
      <div className="img-3"></div>
      </div>
      <div>
      <div className="img-4"></div>
      </div>
      <div>
      <div className="img-5"></div>
      </div>
     
    </Slider>

    <div className="our-blog">
      <div className="our-text">Our blog</div>
      <div className="latest-posts">Latest posts</div>
      <div className="our-grid">
        <div className="item-1">
          <div className="img"></div>
        </div>
        <div className="item-2">
          <div className="img"></div>
        </div>
        <div className="item-3">
          <div className="img"></div>
        </div>
      </div>
    </div>
    </Container>
  );
}