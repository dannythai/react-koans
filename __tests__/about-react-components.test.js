import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import HelloWorld from '../src/part-one/about-jsx/fix-me/hello-world.js';
import Classes from '../src/part-one/about-jsx/fix-me/classes.js';

configure({ adapter: new Adapter() });

test('[about-jsx/hello-world.js] Component should render "Hello World"', () => {
  const component = shallow(<HelloWorld />);
  expect(component.find('.my-text').text()).toEqual('Hello World')
});

test('[about-jsx/classes.js] Div element should have a class called "blue"', () => {
  const component = shallow(<Classes />);
  expect(component.find('#color').hasClass('blue')).toBe(true);
});

