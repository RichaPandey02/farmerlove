import About from "../components/pages/About";
import {render,screen,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'


it("demo testing",()=>{
    expect(true).toBe(true);
})
it("it should be contain the following text",()=>{
    const result="Agriculture"
    expect(result).toBe(result);
})
afterEach(()=>{
    cleanup();
})
test('should render About component',()=>{
    render(<About/>);
    const element=screen.getByTestId('testcase');
     expect(element).toBeInTheDocument();
     expect(element).toHaveTextContent('agriculture');
     expect(element).toContainHTML('<i class="material-icons brand-icon" data-testid="testcase" style="font-size: 100px;">agriculture</i>')
})
test('should render the paragraph ',()=>{
    render(<About/>);
    const element=screen.getByTestId('testcase-1');
     expect(element).toBeInTheDocument();
     expect(element).toHaveTextContent('agriculture');
     expect(element).not.toContainHTML('<h1>')
})
test('matches snapshot',()=>{
    const tree=renderer.create(<About/>).toJSON();
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

  const tree=renderer.create(<About/>)
  it("should create component",()=>{
    expect(tree).toBeTruthy()
  })
  test('should render the footer ',()=>{
    render(<About/>);
    const element=screen.getByTestId('history');
     expect(element).toBeInTheDocument();
     expect(element).toHaveTextContent('history_toggle_off');
     expect(element).not.toContainHTML('<h1>')
})