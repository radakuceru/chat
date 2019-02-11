import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
  	super(props);
    this.state = { value: ''}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleClick(event) {
    var items = this.state.value;
    this.props.updateItemsCallback(items);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state);

  }

  render() {
    return (
      <div class="messenger">
        <div className="container">
          <div className="chat">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="input mdl-textfield__input mdl-cell--11-col" id="chat" type="text" value={this.state.value} onChange={this.handleChange}/>
              <button onClick={this.handleClick} className="mdl-button button-position mdl-js-button mdl-button--fab mdl-js-ripple-effect  mdl-button--primary">
                <i className="material-icons">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
