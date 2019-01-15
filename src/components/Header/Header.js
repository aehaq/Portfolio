import React, { Component } from "react";
import { Collapse, Button } from 'reactstrap';
import "./Header.css";

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        return(
            <header className="header">
                <h1>Azzi Haq</h1>
                <a>LinkedIn</a>
                <a>GitHub</a>
                <a>Resume</a>
                <a>Contact</a>
                <Button color="primary" onClick={this.toggle} >Dropdown</Button>
                <Collapse isOpen={this.state.collapse}>
                <div>
                    <h1>
                        HELLO WORLD!
                    </h1>
                </div>
                </Collapse>
            </header>
        )
    }
}

export default Header;