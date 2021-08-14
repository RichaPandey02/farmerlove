
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {shallow} from 'enzyme';
import { BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/Footer'
configure({adapter:new Adapter()});
describe('shallow Footer Page',()=>{
  it('render the classname for root element',()=>{
      let wrapper=shallow(<Footer/>)
      console.log(wrapper.debug())
      expect(wrapper.exists('.footer')).toEqual(true)
  })
  it('render the classname for chlid element',()=>{
    let wrapper=shallow(<Footer/>)
    console.log(wrapper.debug())
    expect(wrapper.exists('.footer__listitem--heading')).toEqual(true)
})
})
test("to check whether Footer component rendered", () => {
    render(
      <BrowserRouter>
          <Footer />
      </BrowserRouter>
    );
  });  
  test("should render the Heading ", () => {
    render(<Footer />);
    const element = screen.getByTestId("getintouch");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Get In touch");
  });
  test("should render the heading ", () => {
    render(<Footer />);
    const element = screen.getByTestId("getintouch");
    expect(element).toBeInTheDocument();
    expect(element).not.toContainHTML("<h5>");
  });
  test("should render the text ", () => {
    render(<Footer />);
    const element = screen.getByTestId("farmersfriend");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Farmers Friend 👩‍👩‍👧");
  });
  test("should render the phone ", () => {
    render(<Footer />);
    const element = screen.getByTestId("phone");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("8957907453");
  });
  test("should render the email ", () => {
  render(<Footer />);
  const element = screen.getByTestId("email");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("richapandey0297@gmail.com");
});
  