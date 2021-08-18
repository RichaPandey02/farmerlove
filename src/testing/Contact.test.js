import { configure,shallow,render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Contact } from "../components/pages/Contact"
import { Card } from "../components/pages/Card"
import { BrowserRouter } from "react-router-dom";
import { container, screen } from "@testing-library/react";
import * as router from 'react-router';

configure({ adapter: new Adapter() });
test("to check whether contact component rendered", () => {
  render(
    <BrowserRouter>
        <Contact />
    </BrowserRouter>
  );
});  
test("to check whether Card component rendered", () => {
  render(
    <BrowserRouter>
        <Card />
    </BrowserRouter>
  );
});  
test("renders a form with title, content, tags, and a submit button", () => {
  screen.getByLabelText(/Name/i);
  screen.getByLabelText(/Topic/i);
  screen.getByLabelText(/Details/i);
  screen.getByText(/submit/i);
});
it("should have an name field", () => {
  expect(container.find("name").length).toEqual(1);
});
const simulateChangeInput=(Component,inputselector,setUser,Fullname)=>{
  let input=Component.find(inputselector)
  input.simulate('change',{
    target:{
      value:setUser,
      name:Fullname
    }
  })
  return Component.find(inputselector)
}
it('should capture name correctly onchange for name',function(){
  const Component=shallow(<Contact/>)
  let nameInput=simulateChangeInput(Component,'#search','Richa','Fullname');
  expect(nameInput.props().value).toBe('Richa')
})


it('should capture name correctly onchange for Topic',function(){
  const Component=shallow(<Contact/>)
  let nameInput=simulateChangeInput(Component,'#search2','onion','Topic');
  expect(nameInput.props().value).toBe('onion')
})
it('should capture name correctly onchange for Details',function(){
  const Component=shallow(<Contact/>)
  let nameInput=simulateChangeInput(Component,'#search','which is perfect soil for onion','Details');
  expect(nameInput.props().value).toBe('Details')
})
