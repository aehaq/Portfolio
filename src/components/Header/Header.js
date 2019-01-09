import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return(
            <header className="header">
                <h1>Azzi Haq</h1>
                <a>LinkedIn</a>
                <a>GitHub</a>
                <a>Resume</a>
                <a>Contact</a>
            </header>
        )
    }
}

export default Header;