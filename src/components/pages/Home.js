//Home page code..
import React from "react";
import Carousel from "../layout/Carousel";
import HOme from "../styles/HOme.css";
import Footer from "../layout/Footer";
const Home = () => {
  return (
    <div>
      <br />
      <h1>Farmer's Friend</h1>
      <p>The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings. </p>
      <br/>
      <Carousel />
    </div>
  );
};
export default Home;
