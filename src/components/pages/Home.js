//Home page code..
import React from "react";
import Carousel from "../layout/Carousel";
import HOme from "../styles/HOme.css";
import Footer from "../layout/Footer";
const Home = () => {
  return (
    <div className="home">
      <br />
      <h1 className="home__heading">Farmer's Friend</h1>
      <p className="home__para">The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings. </p>
      <br/>
      <Carousel />
      <br/><br/>
      <Footer/>
    </div>
  );
};
export default Home;
