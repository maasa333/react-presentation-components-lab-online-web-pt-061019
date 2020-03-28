import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent handleClick={this.handleClick} />
    <SimplerComponent handleClick={this.handleClick} />
  </div>,
  document.getElementById('root')
);