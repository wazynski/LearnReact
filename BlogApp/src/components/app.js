import React, { Component } from 'react';

class App extends Component {
  render() {
    if (!this.props.children) {
      return null;
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
