import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Container } from 'reactstrap';
import { Animated } from "react-animated-css";
import './App.css';

class App extends Component {

  state = {};

  render() {
    return (
      <div>
      <Wrapper>
        <Container fluid className="p-0">
          <Animated animationIn="slideInDown" isVisible={true}>
            <Header/>
          </Animated>
          <Projects/>
        </Container>
        <footer className="footer text-center">
          <small className="text-muted m-0 small">© Copyright { (new Date()).getFullYear() }</small>
        </footer>
      </Wrapper>
      </div>
    );
  }
}

export default App;