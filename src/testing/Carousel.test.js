import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {shallow} from 'enzyme';
import Carousel from '../components/layout/Carousel';
import { Item } from 'react-grid-carousel';
configure({adapter:new Adapter()});
describe('shallow Carousel Page',()=>{
    it('render the carousel Page',()=>{
        let wrapper=shallow(<Carousel/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('.carousel')).toEqual(true)
    })
    it('render the class',()=>{
        let wrapper=shallow(<Carousel/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('.carousel-slider')).toEqual(true)
    })
    it('render the className for arrow',()=>{
        let wrapper=shallow(<Carousel/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('.prev-arrow arrow')).toEqual(true)
    })
})
