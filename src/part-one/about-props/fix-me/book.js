import React, { Component } from 'react';

class Book extends Component {
  render() { 
    return (  
      <div>
        <h3 className='book-title'>{/* insert prop here */}</h3>
        <div>By Danny Thai</div>
      </div>
    );
  }
}
 
export default Book;