
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from "../components/pages/NotFound"
import {shallow} from 'enzyme';
import { BrowserRouter } from "react-router-dom";

configure({adapter:new Adapter()});
describe('shallow Footer Page',()=>{
  it('render the classname for root element',()=>{
      let wrapper=shallow(<NotFound/>)
      console.log(wrapper.debug())
      expect(wrapper.exists('.not-found')).toEqual(true)
  })
  it("it should be contain the following text",()=>{
    const result="Page Not Found"
    expect(result).toBe(result);
  })
  it('render the classname for text ',()=>{
    let wrapper=shallow(<NotFound/>)
    console.log(wrapper.debug())
    expect(wrapper.exists('.display-1')).toEqual(true)
    const element = screen.getByTestId("notfound");
    expect(element).toHaveTextContent("Page Not Found");
})
test("to check whether NotFound component rendered", () => {
    render(
      <BrowserRouter>
          <NotFound />
      </BrowserRouter>
    );
});
test("should render the heading ", () => {
  render(<NotFound />);
  const element = screen.getByTestId("getintouch");
  expect(element).toBeInTheDocument();
  expect(element).not.toContainHTML("<h5>");
});
  
})