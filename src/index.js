import React, { Component } from 'react';
import Game from './part-two';
import Intro from './part-one';
import ReactDOM from 'react-dom';
import './styles.scss';

class App extends Component {
  state = {
    section: 1
  };

  unlockNextSection = () => {
    this.setState({
      section: this.state.section + 1
    });
  }

  renderPartTwo() {
    if (this.state.section > 1) {
      return <Game />;
    }
  }

  render() {
    return (
      <div className='app-container'>
        <button onClick={this.unlockNextSection}>Unlock Next Section</button>
        <div className='section'>
          <Intro />
        </div>
        <div className='section'>
          {this.renderPartTwo()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

