import React, { Component } from 'react';

const foods = [];

class GroceryList extends Component {

  renderList() {
    return foods.map(food => (
      <div>{food}</div>
    ))
  }

  render() { 
    return (
      <ul className='list'>
        {this.renderList()}
      </ul>
    );
  }
}
 
export default GroceryList;