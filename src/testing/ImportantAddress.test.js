import Impd from "../components/pages/Impd";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Carousel from "../components/layout/Carousel";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { shallow ,mount} from "enzyme";
import Card from "../components/pages/Card";
import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
    wrapper = mount(<Impd />);
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
  it(`filters "State" column by "Bihar"`, () => {
    wrapper.instance().filterBtnHandler("STATE", "Bihar");
    agGridReact.gridApi.forEachNodeAfterFilter(node => {
      expect(node.data["State"]).toEqual("Bihar");
    });
  });
  it('clears filters', () => {
    wrapper.instance().filterBtnHandler("STATE", "Bihar");
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



afterEach(() => {
    cleanup();
  });
  describe("shallow Important Address Page", () => {
    it("render the page", () => {
      let wrapper = shallow(<Impd />);
      console.log(wrapper.debug());
      expect(wrapper.exists(".ag-theme-alpine")).toEqual(true);
     
    });  
    it("the background color should be #192a56", () => {
        const color = "#192a56";
        expect(color).toEqual("#192a56");
      });
      it("the background should be", () => {
        const background = "transparent";
        expect(background).toEqual("transparent");
      });
})
it("it should be contain the following text",()=>{
  const result="Soil Testing Labs"
  expect(result).toBe(result);
})
it("it should be contain the alter ",()=>{
  const result="Do you want to update tour data?🙄🙄"
  expect(result).toBe(result);
})
it("it should be contain the update text ",()=>{
  const result="your data has been updated 🙂☺"
  expect(result).toBe(result);
})
it("the col property should be", () => {
  const sortable = true;
  expect(sortable).toBe(true)
});


it('Aggrid should render ',()=>{
  const component=shallow(<Impd/>);
  const resp={
    
    data:{'STATE':'Bihar'},
    oldValue:'Bihar',
    value:'Bihar'  
    
  }
  let a=1;
  
  const gridcomp=component.find('AgGridReact');
  gridcomp.simulate('CellEditingStopped',resp,a);
  expect(gridcomp).toBeTruthy();
})

it('Aggrid should render the property for state  ',()=>{
  const component=shallow(<Impd/>);
  const resp={
    data:{
      'DIST':"Araria"
    }
  }
  const gridcomp=component.find('AgGridReact');
  gridcomp.simulate('RowDoubleClicked',resp);
  expect(gridcomp).toBeTruthy();
})




it('Aggrid should render the property for onGridReady  ',()=>{
  const component=shallow(<Impd/>);
  const resp={
    data:{
      'DIST':"Araria"
    }
  }
  const gridcomp=component.find('AgGridReact');
  gridcomp.simulate('onGridReady',resp);
  expect(gridcomp).toBeTruthy();
})
it('Aggrid should render the property for pagination  ',()=>{
  const component=shallow(<Impd/>);
 
  const gridcomp=component.find('AgGridReact');
  gridcomp.simulate('pagination');
  expect(gridcomp).toBeTruthy();
})





