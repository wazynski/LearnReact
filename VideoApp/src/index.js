import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBDLui5HjS-REv6U2ovpk8SWy7czeKUY6Y';

// Create new component. This component should produe some HTML

// const is ES6 is simlar to var but it will never chnage it is a constant
// JSX allows for html in javascript, it looks like HTML but is really JS.
// ES6 () => {} is equal to function() {} however scop of this changes slightly

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page (DOM)
// JSX calls React.createElement() so you take class App and wrap in JSX to instantiate
// You need to provide it a reference to exisiting DOM element

ReactDOM.render(<App />, document.querySelector('.container'));
