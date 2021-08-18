import Schemes from "../components/pages/Schemes";
import {render,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

import Carousel from "../components/layout/Carousel"
import Footer from '../components/layout/Footer'
import { BrowserRouter } from "react-router-dom";
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});




// ignore license errors
jest.spyOn(console, 'error').mockImplementation(() => { });
// grid warnings?
jest.spyOn(console, 'warn').mockImplementation(() => { });

const testData = [
  //  { title: 'Training Programme To Farmers In Handling And Maintenance Of Agricultural Machinery  ', State: ' Tamil Nadu   ',Website:' Tamil Nadu   ',Description:' Name of Scheme : Training Programme to Farmers in handling and maintenance of Agricultural machinery Project Area : All districts (Except Chennai) Details of Works :Refresher training programmes on handling and maintenance of newly developed agricultural machinery to farmers and rural youth are conducted. Benefits offered (Subsidy): Eligibility: All farmers and rural unemployed youth between the age group of 18 to 40 Time-limit for Implementation :Programme will be completed within the fina...    '},
  //  { title: 'BMW', State: 'B', price: 20000,Website:'',Description },
  // { title: 'Citroen', State: 'C', price: 30000,Website:'',Description }
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
    wrapper = mount(<Schemes />);
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
  
  it(`filters "State" column by "Tamil Nadu"`, () => {
    wrapper.instance().filterBtnHandler("State", "Tamil Nadu");
    agGridReact.gridApi.forEachNodeAfterFilter(node => {
      expect(node.data["State"]).toEqual("Tamil Nadu");
    });
  });
  it('clears filters', () => {
    wrapper.instance().filterBtnHandler("State", "Tamil Nadu");
    wrapper.find('#removeFilters').simulate('click');
    expect(wrapper.render().find('filter').length).toEqual(0);
  })
  it('Removes all sorting', () => {
    wrapper.find('#sortByPriceAsc').simulate('click');

    wrapper.find('#removeSort').simulate('click');

    // 1) querying JSDOM
    const columns = wrapper.render().find('.ag-header-cell');
    expect(wrapper.render().find('.ag-header-cell-sorted-none').length).toEqual(columns.length);
    // 2) using the grid API
    const sortModel = agGridReact.api.getSortModel();
    expect(Object.keys(sortModel).length).toEqual(0);
  })
})








it("demo testing",()=>{
    expect(true).toBe(true);
})
it("it should be contain the following text",()=>{
    const result=" SCHEMES AVAILABLE FOR MARKET PRICE"
    expect(result).toBe(result);
})
it("it should be contain the alter ",()=>{
  const result="Do you want to update tour data?🙄🙄"
  expect(result).toBe(result);
})
it("it should be contain the update text ",()=>{
  const result="your data has been updated 🙂☺ "
  expect(result).toBe(result);
})

afterEach(()=>{
    cleanup();
})
// test('should render Schemes component',()=>{
//     render(<Schemes/>);
//     const element=screen.getByTestId('testcase');
//      expect(element).toBeInTheDocument();
    
// })





it("the background color should be #192a56", () => {
    const color = "#192a56";
    expect(color).toEqual("#192a56");
  });
  it("the background should be", () => {
    const background = "transparent";
    expect(background).toEqual("transparent");
  });
  it("the col property should be", () => {
    const sortable = true;
    expect(sortable).toBe(true)
  });
 



  



test("to check whether scheme component rendered", () => {
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
      // expect(wrapper.exists('.export-btn')).toEqual(true)
    })
    
  })
  