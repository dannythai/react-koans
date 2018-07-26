import React, { Component } from 'react';
import AboutReactComponents from './about-jsx';
import './styles.scss';

class Intro extends Component {
  state = {  }
  render() { 
    return (
      <div className='intro-section'>
        <h2>Intro</h2>
        <div>
          <AboutReactComponents />
        </div>
      </div>
    );
  }
}
 
export default Intro;