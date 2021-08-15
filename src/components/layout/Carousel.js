//Carousel for Home Page......

import React from "react";
// import Carousel from "react-grid-carousel";
import carousl from "../styles/carousl.scss";
// import $ from "jquery";

const Carousel1 = () => {
  return (
  <div class="ef-carousel">
  <input type="radio" name="unique-name" id="unique-name-1" checked class="ef-carousel__state"/>
  <input type="radio" name="unique-name" id="unique-name-2" class="ef-carousel__state"/>
  <input type="radio" name="unique-name" id="unique-name-3" class="ef-carousel__state"/>
  <div class="ef-carousel__items">
    <img src="https://www.teahub.io/photos/full/80-806201_indian-farmer-hd-wallpaper-download.jpg" alt="" class="ef-carousel__item"/>
    <img src="https://images.pexels.com/photos/6500749/pexels-photo-6500749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=" " class="ef-carousel__item" />
    <img src="https://wallpaperaccess.com/full/803482.jpg" alt="" class="ef-carousel__item" />
  </div>
  <div class="ef-carousel__next-group">
    <label for="unique-name-2" class="ef-carousel__next">.</label>
    <label for="unique-name-3" class="ef-carousel__next">.</label>
    <label for="unique-name-1" class="ef-carousel__next">.</label>
  </div>
  <div class="ef-carousel__prev-group">
    <label for="unique-name-3" class="ef-carousel__prev">.</label>
    <label for="unique-name-2" class="ef-carousel__prev">.</label>
    <label for="unique-name-1" class="ef-carousel__prev">.</label>
  </div>
  <div class="ef-carousel__dots">
    <label for="unique-name-1" class="ef-carousel__dot">.</label>
    <label for="unique-name-2" class="ef-carousel__dot">.</label>
    <label for="unique-name-3" class="ef-carousel__dot">.</label>
  </div>
</div>
  );
};

export default Carousel1;

//"https://wallpaperaccess.com/full/4293102.jpg"