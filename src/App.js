import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {

  state = {};

  render() {
    return (
      <div>
      <Wrapper>
        <Container fluid className="p-0">
          <Header/>
          <Projects/>
          <p>copyright</p>
        </Container>
      </Wrapper>
      </div>
    );
  }
}

export default App;
