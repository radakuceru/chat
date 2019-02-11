import React from 'react';
import ReactDOM from 'react-dom';
import BubblePrimary from './BubblePrimary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BubblePrimary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
