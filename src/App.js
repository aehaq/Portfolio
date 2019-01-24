import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Projects from "./components/Projects";
import './App.css';

class App extends Component {

  state = {};

  render() {
    return (
      <div>

      <Wrapper>
        <Header/>
        <Projects/>
        <p>copyright</p>
      </Wrapper>
      </div>
    );
  }
}

export default App;
