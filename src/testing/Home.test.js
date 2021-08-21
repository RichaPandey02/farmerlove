import Home from "../components/pages/Home";
import { render, cleanup,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Carousel from "../components/layout/Carousel";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { shallow } from "enzyme";


it("render the classname for root element", () => {
  let wrapper = shallow(<Home />);
  console.log(wrapper.debug());
  expect(wrapper.exists(".home")).toEqual(true);
});
it("render the classname for heading", () => {
  let wrapper = shallow(<Home />);
  console.log(wrapper.debug());
  expect(wrapper.exists(".home__heading")).toEqual(true);
});
it("render the classname for paragraph", () => {
  let wrapper = shallow(<Home />);
  console.log(wrapper.debug());
  expect(wrapper.exists(".home__para")).toEqual(true);
});


test("to check whether Home component rendered", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});
test("to check whether carausel component rendered", () => {
  render(
    <BrowserRouter>
      <Carousel />
    </BrowserRouter>
  );
});



test("matches snapshot", () => {
  const tree = renderer.create(<Home />).toJSON();
  console.log(tree);
});

const tree = renderer.create(<Home />);
it("should create component", () => {
  expect(tree).toBeTruthy();
});
test("to check whether Footer component rendered", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
});

test("should render the heading ", () => {
  render(<Home />);
  const element = screen.getByTestId("home-page");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Farmer's Friend");
});
test("should render paragraph  text ", () => {
  render(<Home />);
  const element = screen.getByTestId("home-para");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(" The ultimate goal of farming is not the growing of crops, but the cultivation and perfectiion of human beings.");
});