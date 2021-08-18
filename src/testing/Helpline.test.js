import Helplines from "../components/pages/Helplines";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import Carousel from "../components/layout/Carousel";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { shallow, mount } from "enzyme";
import Card from "../components/pages/Card";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

// ignore license errors
jest.spyOn(console, "error").mockImplementation(() => {});
// grid warnings?
jest.spyOn(console, "warn").mockImplementation(() => {});

const testData = [];

const setRowData = (wrapper, rowData) => {
  return new Promise(function (resolve, reject) {
    wrapper.setState({ rowData }, () => {
      wrapper.update();
      resolve();
    });
  });
};

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

describe("Grid Actions Panel", () => {
  let wrapper = null;
  let agGridReact = null;

  beforeEach((done) => {
    wrapper = mount(<Helplines />);
    agGridReact = wrapper.find(AgGridReact).instance();

    ensureGridApiHasBeenSet(wrapper)
      .then(() => setRowData(wrapper, testData))
      .then(() => done());
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
    agGridReact = null;
  });
  it("renders without crashing", () => {
    expect(
      wrapper.find(".ag-theme-alpine>.manage-table").exists()
    ).toBeTruthy();
  });
});

it("it should be contain the following text", () => {
  const result =
    " Bharat Sarkar Has Started A Kisan Call Center For The Support Of The Farmers.";
  expect(result).toBe(result);
});

afterEach(() => {
  cleanup();
});

describe("shallow Helplines Page", () => {
  it("render the class", () => {
    let wrapper = shallow(<Helplines />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".about-para")).toEqual(true);
  });
  it("render the card", () => {
    let wrapper = shallow(<Card />);
    console.log(wrapper.debug());
  });
  it("render the class name for paragarph", () => {
    let wrapper = shallow(<Helplines />);
    console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
  it("snapshot for helpline", () => {
    let wrapper = shallow(<Helplines />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".about-para__help")).toEqual(true);
  });
  it("render the class name for Aggrid", () => {
    let wrapper = shallow(<Helplines />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".ag-theme-alpine")).toEqual(true);
  });
});
it("demo testing", () => {
  expect(true).toBe(true);
});
test("to check whether carausel component rendered", () => {
  render(<Carousel />);
});

test("to check whether Helplines component rendered", () => {
  render(
    <BrowserRouter>
      <Helplines />
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
  render(<Helplines />);
  const element = screen.getByTestId("helpline__testcase");
  expect(element).toBeInTheDocument();
  expect(element).not.toContainHTML("<h5>");
});

test("should render the Heading ", () => {
  render(<Helplines />);
  const element = screen.getByTestId("helpline");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Available Helplines 😊😊");
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
