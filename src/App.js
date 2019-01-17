import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Projects from "./components/Projects";
import './App.css';

class App extends Component {

  state = {};

  render() {
    return (
      <Wrapper>
        <Header/>
        <Projects/>
      </Wrapper>
    );
  }
}

export default App;
