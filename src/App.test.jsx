import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {mount}  from "enzyme";
import App from './App';
// import * as Adapter from 'enzyme';
// enzyme.configure({ adapter: new Adapter() });

// describe('App', () => {

//   let app,
//       testProps;

//   beforeEach('Component setup', () => {

//       testProps = Object.freeze({
//         name: "",
//         email: "",
//         message: "",
//       });

//       app = mount(<LockScreen {...testProps}/>);

//   });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

//   it('smiulates submit to check data', () => {
//   const form = app.find('form');
//   // expect(app).state().submitted).toEqual(false);
//   // form.simulate('submit', {preventDefault () {} });
//   // expect(app).state().submitted).toEqual(true);
// });

// });