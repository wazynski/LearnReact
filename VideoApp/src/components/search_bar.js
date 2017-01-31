import React, { Component } from 'react';

// Functional component - dumb!
// Always start with these then move to class if needed
// const SearchBar = () => {
//   return <input />;
// };


// class component must always render some JSX is self aware
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // You can define a callback using this format and the defin that in the class
    // return <input onChange={this.onInputChange} />;

    // Or, you can run the code directly using a ES6 funcion
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term : event.target.value })} />
      </div>
    )
  }

  // This is the callback that is called onChange in the commented out example
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
};

export default SearchBar;
