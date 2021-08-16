import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Contact} from '../components/pages/Contact'
import {mount} from 'enzyme';
import { render, screen, cleanup } from "@testing-library/react";
// import Form from './Form'
configure({adapter:new Adapter()});
test('renders a form with title, content, tags, and a submit button', () => {
    render(<Contact />)
    screen.getByLabelText(/Name/i)
    screen.getByLabelText(/Topic/i)
    screen.getByLabelText(/Details/i)
    screen.getByText(/submit/i)
  })
  
