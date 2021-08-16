// import {configure} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import {Contact} from '../components/pages/Contact'
// import {shallow} from 'enzyme';

// configure({adapter:new Adapter()});
// describe('shallow Contactus Page',()=>{
//     it('render the contactus Page',()=>{
//         let wrapper=shallow(<Contact/>)
//         console.log(wrapper.debug())
//         expect(wrapper.exists('.container')).toEqual(true)
//     })
//     it('render the class',()=>{
//         let wrapper=shallow(<Contact/>)
//         console.log(wrapper.debug())
//         expect(wrapper.exists('.container__hero-large')).toEqual(true)
//     })
//     it('render the className for text input',()=>{
//         let wrapper=shallow(<Contact/>)
//         console.log(wrapper.debug())
//         expect(wrapper.exists('.contact-form__txt')).toEqual(true)
//     })
// })