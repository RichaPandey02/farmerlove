//Carousel for Home Page......

import React from "react";

import carousl from "../styles/carousl.scss";


const Carousel1 = () => {
  return (
  <div className="ef-carousel">
  <input type="radio" name="unique-name" id="unique-name-1" checked class="ef-carousel__state"/>
  <input type="radio" name="unique-name" id="unique-name-2" className="ef-carousel__state"/>
  <input type="radio" name="unique-name" id="unique-name-3" className="ef-carousel__state"/>
  <div className="ef-carousel__items">
    <img src="https://www.teahub.io/photos/full/80-806201_indian-farmer-hd-wallpaper-download.jpg" alt="" class="ef-carousel__item"/>
    <img src="https://images.pexels.com/photos/6500749/pexels-photo-6500749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=" " class="ef-carousel__item" />
    <img src="https://wallpaperaccess.com/full/803482.jpg" alt="" class="ef-carousel__item" />
  </div>
  <div className="ef-carousel__next-group">
    <label for="unique-name-2" className="ef-carousel__next">.</label>
    <label for="unique-name-3" className="ef-carousel__next">.</label>
    <label for="unique-name-1" className="ef-carousel__next">.</label>
  </div>
  <div className="ef-carousel__prev-group">
    <label for="unique-name-3" className="ef-carousel__prev">.</label>
    <label for="unique-name-2" className="ef-carousel__prev">.</label>
    <label for="unique-name-1" className="ef-carousel__prev">.</label>
  </div>
  <div className="ef-carousel__dots">
    <label for="unique-name-1" className="ef-carousel__dot">.</label>
    <label for="unique-name-2" className="ef-carousel__dot">.</label>
    <label for="unique-name-3" className="ef-carousel__dot">.</label>
  </div>
</div>
  );
};

export default Carousel1;

//"https://wallpaperaccess.com/full/4293102.jpg"