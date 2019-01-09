import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Filters from "./components/Filters";
// import Projects from "./components/Projects";
import './App.css';

class App extends Component {

  state = {
    filter: "Featured",
    expanded: false
  };

  render() {
    return (
      <Wrapper>
        <Header
          expanded={this.state.expanded}
        />
        {/* <Filters />
        <Projects 
          filter={this.state.filter}
        /> */}
      </Wrapper>
    );
  }
}

export default App;
