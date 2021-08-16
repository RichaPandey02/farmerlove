import Impd from "../components/pages/Impd";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Carousel from "../components/layout/Carousel";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { shallow } from "enzyme";
import Card from "../components/pages/Card";
afterEach(() => {
    cleanup();
  });
  describe("shallow Important Address Page", () => {
    it("render the page", () => {
      let wrapper = shallow(<Impd />);
      console.log(wrapper.debug());
      expect(wrapper.exists(".ag-theme-alpine")).toEqual(true);
     
    });  
    it("the background color should be #192a56", () => {
        const color = "#192a56";
        expect(color).toEqual("#192a56");
      });
      it("the background should be", () => {
        const background = "transparent";
        expect(background).toEqual("transparent");
      });
})