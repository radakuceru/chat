import React, { Component } from 'react';
import './BubblePrimary.css';
import Chat from '../Chat/Chat';

class BubblePrimary extends Component {
  constructor(props) {
    super(props)
    
    this.updateItems = this.updateItems.bind(this);
    this.state = {
    	items: []
    }
  }
  
  updateItems(newItems) {
  	this.setState({items: newItems});
  }
  
  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <span className="mdl-chip mdl-grid wrap margin-4 mdl-color--accent m-r">
            <span className="mdl-chip__text">{item}</span>
          </span>
        ))}
        <Chat updateItemsCallback={this.updateItems}/>
      </div>
    );
  }
}

export default BubblePrimary;
