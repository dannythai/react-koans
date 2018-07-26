import React, { Component } from 'react';
import HelloWorld from './fix-me/hello-world';
import Classes from './fix-me/classes';

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class AboutReactComponents extends Component {
  state = {  }
  render() { 
    return (
      <div className='about-module'>
        About React Components
        <HelloWorld />
        <Classes />
      </div>
    );
  }
}
 
export default AboutReactComponents;