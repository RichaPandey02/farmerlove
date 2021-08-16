import { render,screen } from "@testing-library/react";
import App from './App';
 import userEvent from '@testing-library/user-event'
  import {BrowserRouter} from 'react-router-dom'
 test('render the App component', () => {
//     window.history.pushState({}, 'Test page', '/')
    render(
      <BrowserRouter>
         <App/>
       </BrowserRouter>,
    )
  
 })