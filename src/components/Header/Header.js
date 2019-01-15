import React, { Component } from "react";
import { Collapse, Button } from 'reactstrap';
import "./Header.css";

class Header extends Component {

    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, status: 'Open'}
    }

    // NOTE: IN Future replace this.state.status with an href for the up and down toggle arrows
    onEntering() {
        this.setState({ status: 'Close' })
    }

    onExiting() {
        this.setState({ status: 'Open' })
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse})
    }

    render() {
        return(
            <header className="header">
                <h1>Azzi Haq</h1>
                <a>LinkedIn</a>
                <a>GitHub</a>
                <a>Resume</a>
                <a>Contact</a>
                <br></br>
                <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onExiting={this.onExiting}>
                <div>
                    <h1>
                        HELLO WORLD!
                    </h1>
                </div>
                </Collapse>
                <Button color="primary" onClick={this.toggle}>{this.state.status}</Button>
            </header>
        )
    }
}

export default Header;