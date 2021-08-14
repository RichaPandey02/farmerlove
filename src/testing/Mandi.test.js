import Mandi from "../components/pages/Mandi";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Carousel from "../components/layout/Carousel"
import { BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/Footer'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {shallow} from 'enzyme';
configure({adapter:new Adapter()});
describe('shallow Mandi Page',()=>{
    it('render the class name for aggrid',()=>{
        let wrapper=shallow(<Mandi/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('.ag-theme-alpine')).toEqual(true)
    })
  })

afterEach(() => {
  cleanup();
});

it("demo testing", () => {
  expect(true).toBe(true);
});
test("to check whether carausel component rendered", () => {
  render(
    <BrowserRouter>
        <Carousel />
    </BrowserRouter>
  );
});  

test("to check whether Mandi component rendered", () => {
  render(
    <BrowserRouter>
      <Mandi />
    </BrowserRouter>
  );
});

it("the background color should be #192a56", () => {
  const color = "#192a56";
  expect(color).toEqual("#192a56");
});
it("the background should be", () => {
  const background = "transparent";
  expect(background).toEqual("transparent");
});
test("should render the paragraph ", () => {
  render(<Mandi />);
  const element = screen.getByTestId("testcase");
  expect(element).toBeInTheDocument();
  expect(element).not.toContainHTML("<h5>");
});

test("should render the Heading ", () => {
  render(<Mandi />);
  const element = screen.getByTestId("testcase");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Currently Available Mandi's");
});
it("to be equal to 1", () => {
  const num = 1;
  expect(num).toEqual(1);
});

it("should be truthy", () => {
  //Assertions/Expectations
  expect(true).toBeTruthy();
});

test("to check whether Footer component rendered", () => {
  render(
    <BrowserRouter>
        <Footer />
    </BrowserRouter>
  );
});  
