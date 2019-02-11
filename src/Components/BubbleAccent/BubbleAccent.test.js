import React from 'react';
import ReactDOM from 'react-dom';
import BubbleAccent from './BubbleAccent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BubbleAccent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
