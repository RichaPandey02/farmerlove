import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {shallow} from 'enzyme';
import Navbar from "../components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/layout/Navbar";
configure({adapter:new Adapter()});
describe('shallow Navbar Page',()=>{
    it('render the Navbar Page',()=>{
        let wrapper=shallow(<Navbar/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('.nav')).toEqual(true)
    })
    it('render the class',()=>{
        let wrapper=shallow(<Navbar/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('nav-margin')).toEqual(true)
    })
    it('render the className for navlink',()=>{
        let wrapper=shallow(<NavBar/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('nav__link--active')).toEqual(true)
    })
    it('render the className for left arrow',()=>{
        let wrapper=shallow(<NavBar/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('ef-carousel__prev-group')).toEqual(true)
    })
    it('render the className for right arrow',()=>{
        let wrapper=shallow(<NavBar/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('nav__link--color')).toEqual(true)
    })
})

test("to check whether Navbar component rendered", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
});
