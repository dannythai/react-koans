import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Book from '../src/part-one/about-props/fix-me/book';
import List from '../src/part-one/about-props/fix-me/list';

configure({ adapter: new Adapter() });

test('p1 [about-props/book.js] Should have a prop called "title"', () => {
  const component = shallow(<Book title='Sleep Deprived' />);
  expect(component.find('.book-title').text()).toBe('Sleep Deprived')
});

test('p1 [about-props/list.js] Should render a list of food', () => {
  const component = shallow(<List />);
  expect(component.find('.list').children().exists()).toBe(true)
});