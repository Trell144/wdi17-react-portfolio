import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Specialties from './components/Specialties';

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Specialties />
      </div>
    );
  }
}

export default App;
