import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Carousel from "../components/layout/Carousel";
import { Item } from "react-grid-carousel";
import { Component } from "react";
configure({ adapter: new Adapter() });
describe("shallow Carousel Page", () => {
  it("render the carousel Page", () => {
    let wrapper = shallow(<Carousel />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".ef-carousel")).toEqual(true);
  });

  it("render the class", () => {
    let wrapper = shallow(<Carousel />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".ef-carousel__items")).toEqual(true);
  });
  it("render the class for input", () => {
    let wrapper = shallow(<Carousel />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".ef-carousel__state")).toEqual(true);
  });
  it("render the className for arrow", () => {
    let wrapper = shallow(<Carousel />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".ef-carousel__next-group")).toEqual(true);
  });
  it("render the className for left arrow", () => {
    let wrapper = shallow(<Carousel />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".ef-carousel__prev-group")).toEqual(true);
  });
  it("render the className for right arrow", () => {
    let wrapper = shallow(<Carousel />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".ef-carousel__dots")).toEqual(true);
  });
 
});
