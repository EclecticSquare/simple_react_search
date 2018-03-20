import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='box'>
          <h1 className='title'>React Search</h1>
          <p>Here is a list of links about influential African-Americans in history.</p>
        </div>

        <div>
          <h2>Search</h2>
          <form><input type='text' placeholder='Enter a name'></input></form>
        </div>
      </div>
    );
  }
}

export default App;
