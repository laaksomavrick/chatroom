import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {messages: []}

  componentDidMount() {
    fetch('/api/v1/chat')
     .then(res => { return res.json() } )
     .then(json => this.setState( {messages: json["messages"]} ))
  }

  render() {
    return (
      <div className="App">
        <h1>Messages</h1>
        {this.state.messages.map(message =>
          <div key={message.id}>{message.message_text}</div>
        )}
      </div>
    );
  }
}

export default App;
