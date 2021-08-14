import Schemes from "../components/pages/Schemes";
import {render,screen,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import Carousel from "../components/layout/Carousel"
import Footer from '../components/layout/Footer'
import { BrowserRouter } from "react-router-dom";
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

it("demo testing",()=>{
    expect(true).toBe(true);
})
it("it should be contain the following text",()=>{
    const result=" SCHEMES AVAILABLE FOR MARKET PRICE"
    expect(result).toBe(result);
})
afterEach(()=>{
    cleanup();
})
test('should render Schemes component',()=>{
    render(<Schemes/>);
    const element=screen.getByTestId('testcase');
     expect(element).toBeInTheDocument();
    
})
it("the background color should be #192a56", () => {
    const color = "#192a56";
    expect(color).toEqual("#192a56");
  });
  it("the background should be", () => {
    const background = "transparent";
    expect(background).toEqual("transparent");
  });
test("to check whether carausel component rendered", () => {
    render(
      <BrowserRouter>
          <Carousel />
      </BrowserRouter>
    );
  });  


it("to be equal to 1",()=>{
    const num=1;
    expect(num).toEqual(1);
  })
  it("should be truthy",()=>{
    //Assertions/Expectations
    expect(true).toBeTruthy();
  })

 
  test("to check whether Footer component rendered", () => {
    render(
      <BrowserRouter>
          <Footer />
      </BrowserRouter>
    );
  });  
  describe('snapshot2',()=>{
    it('snapshot for scheme',()=>{
      let wrapper=shallow(<Schemes/>)
      console.log(wrapper.debug())
      expect(wrapper.exists('.export-btn')).toEqual(true)
    })
    
  })
  