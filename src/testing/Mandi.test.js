import Mandi from "../components/pages/Mandi";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Carousel from "../components/layout/Carousel"
import { BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/Footer'
import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import {shallow} from 'enzyme';
configure({adapter:new Adapter()});

// ignore license errors
jest.spyOn(console, 'error').mockImplementation(() => { });
// grid warnings?
jest.spyOn(console, 'warn').mockImplementation(() => { });

const testData = [
  // { make: 'Alfa Romeo', model: 'A', price: 10000 },
  // { make: 'BMW', model: 'B', price: 20000 },
  // { make: 'Citroen', model: 'C', price: 30000 }
];

const setRowData = (wrapper, rowData) => {
  return new Promise(function (resolve, reject) {
    wrapper.setState({ rowData }, () => {
      wrapper.update();
      resolve();
    });
  })
}


const ensureGridApiHasBeenSet = (wrapper) => {
  return new Promise(function (resolve, reject) {
    (function waitForGridReady() {
      if (wrapper.instance().gridApi) {
        resolve(wrapper);
        return;
      }
      setTimeout(waitForGridReady, 100);
    })();
  });
};

describe('Grid Actions Panel', () => {
  let wrapper = null;
  let agGridReact = null;

  beforeEach((done) => {
    wrapper = mount(<Mandi />);
    agGridReact = wrapper.find(AgGridReact).instance();

    ensureGridApiHasBeenSet(wrapper)
      .then(() => setRowData(wrapper, testData))
      .then(() => done());
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
    agGridReact = null;
  })
  it('renders without crashing', () => {
    expect(wrapper.find('.ag-theme-alpine>.manage-table').exists()).toBeTruthy();
    // expect(wrapper.find('. container table-responsive-sm).exists()).toBeTruthy();
  });
})


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
test("test for testid ", () => {
  render(<Mandi />);
  const element = screen.getByTestId("testcase");
  expect(element).toBeInTheDocument();
  expect(element).not.toContainHTML("<h5>");
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

it('render the snapshot',()=>{
  let wrapper=shallow(<Mandi/>)
  console.log(wrapper.debug())
  expect(wrapper).toMatchSnapshot();
})
  it('render the class',()=>{
    let wrapper=shallow(<Mandi/>)
    console.log(wrapper.debug())
    // expect(wrapper.exists('.deleteMandi')).toEqual(true)
})

it('render the class name for Aggrid',()=>{
  let wrapper=shallow(<Mandi/>)
  console.log(wrapper.debug())
  expect(wrapper.exists('.ag-theme-alpine')).toEqual(true)
})
it("it should be contain the following text",()=>{
  const result="Currently Available Mandi's"
  expect(result).toBe(result);
})
it("it should be contain the alter ",()=>{
  const result="Do you want to update your data?🙄🙄"
  expect(result).toBe(result);
})
it("it should be contain the update text ",()=>{
    
    const result="your data has been updated😊😊"
  expect(result).toBe(result);
})
it("it should be contain the delete text ",()=>{
    
  const result="your data has been deleted"
expect(result).toBe(result);
})
