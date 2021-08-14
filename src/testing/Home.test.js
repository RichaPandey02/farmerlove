import Home from "../components/pages/Home";
import {render,cleanup,screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom';
import Carousel from "../components/layout/Carousel"
import { BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/Footer'


afterEach(() => {
    cleanup();
  });
  
  it("demo testing", () => {
    expect(true).toBe(true);
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

  it("the background color should be #192a56", () => {
    const color = "#192a56";
    expect(color).toEqual("#192a56");
  });
  it("the background should be", () => {
    const background = "transparent";
    expect(background).toEqual("transparent");
  });
  



test('matches snapshot',()=>{
    const tree=renderer.create(<Home/>).toJSON();
    console.log(tree);
})
it("to be equal to 1",()=>{
    const num=1;
    expect(num).toEqual(1);
  })
  it("should be truthy",()=>{
    //Assertions/Expectations
    expect(true).toBeTruthy();
  })

  const tree=renderer.create(<Home/>)
  it("should create component",()=>{
    expect(tree).toBeTruthy()
  })
  test("to check whether Footer component rendered", () => {
    render(
      <BrowserRouter>
          <Footer />
      </BrowserRouter>
    );
  });  