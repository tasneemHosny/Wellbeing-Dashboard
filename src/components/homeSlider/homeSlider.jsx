import React from "react";
import Slider from "react-slick";
import slider3 from "./../../assets/images/slider-image-1.jpeg"
import slider2 from "./../../assets/images/slider-2.jpeg"
import slider1 from "./../../assets/images/slider-image-3.jpeg"
import slider4 from "./../../assets/images/slider-image-2.jpeg"
import banner1 from "./../../assets/images/banner-1.jpeg"
import banner2 from "./../../assets/images/banner-2.jpeg"
import banner3 from "./../../assets/images/banner-3.png"
export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000
  };
  return (
    <section  className="py-5">
        <div className="flex">
        <div className="w-[70%] mb-2">
            <Slider {...settings}>
                <div>
                  <img src={slider1} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <img src={slider2} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <img src={slider3} className="w-full h-[450px]" alt="" />
                </div>
            </Slider>
        </div>
        <div className="w-[30%] flex flex-col">
            <div className="w-full h-[225px]">
                <img src={slider3} alt="" className="w-full h-full" />
            </div>
            <div className="h-[225px]">
                <img src={slider4} alt="" className="w-full h-full"/>
            </div>
        </div>
        </div>
        
    </section>
  );
}