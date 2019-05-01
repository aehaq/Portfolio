import React, { Component } from "react";
import { Collapse, Button, Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import "./Header.css";
import Profile from "./Profile";

class Header extends Component {

    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, icon: 'fas fa-angle-down', aboutText: "About Me"}
    }

    // NOTE: In Future replace this.state.status with an href for the up and down toggle arrows
    onEntering() {
        this.setState({ 
            icon: 'fas fa-angle-up',
            aboutText: ""
        })
    }

    onExiting() {
        this.setState({ 
            icon: 'fas fa-angle-down', 
            aboutText: "About Me"
        })
    }

    toggle() {
        this.setState({ 
            collapse: !this.state.collapse
        })
    }

    render() {
        return(
            <header className="header">
                {/* Top Row containing name and info */}
                <Row className="pt-3">
                    {/* Name and Title Div */}
                    <Col sm="5">
                        <Row>
                            <Col md="3" xs="2">
                            </Col>
                            <Col>
                            <h1 className="text-secondary m-0">Azzi Haq</h1>
                            </Col>   
                        </Row>
                        <Row>
                            <Col md="3" xs="2">
                            </Col>
                            <Col>
                            <p className="text-secondary m-0"><i>/ɑziˈhʌk/</i></p>
                            </Col>          
                        </Row>
                        <Row>
                            <Col md="3" xs="2">
                            </Col>
                            <Col>
                            <p className="text-secondary"><i>Noun.</i> <strong>  Full Stack Developer </strong> </p>
                            </Col>     
                        </Row>
                    </Col>
                    {/* Contact and Resume links */}
                    <Col md="6" sm="7">
                    <Nav className="float-sm-right justify-content-center">
                            {/* LinkedIn */}
                        <NavLink className="text-secondary m-1" href="https://www.linkedin.com/in/azfarhaq/">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </Row>
                            <Row>
                                LinkedIn
                            </Row>
                        </NavLink>
                            {/* GitHub */}
                        <NavLink className="text-secondary m-1" href="https://github.com/aehaq">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fab fa-github"></i>
                                </a>
                            </Row>
                            <Row>
                                GitHub
                            </Row>
                        </NavLink>
                            {/* Resume */}
                        <NavLink className="text-secondary m-1" href="assets/docs/AzziHaqResume.pdf">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fas fa-file"></i>
                                </a>
                            </Row>
                            <Row>
                                Resume
                            </Row>
                        </NavLink>
                            {/* MailTo link */}
                        <NavLink className="text-secondary m-1" href="mailto:azfarehaq@gmail.com">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </Row>
                            <Row>
                                Contact
                            </Row>
                        </NavLink>
                    </Nav>
                    </Col>
                    <Col />
                </Row>
                    {/* Profile Section displays here when about me button is toggled */}
                <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onExiting={this.onExiting}>
                    <Profile />
                </Collapse>
                {/* About Me button toggle */}
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                        <a onClick={this.toggle}>
                            <p className="text-muted m-0 small"> {this.state.aboutText} </p>
                            <i className={this.state.icon}></i>
                        </a>
                    </Col>
                    <Col></Col>
                </Row>
            </header>
        )
    }
}

export default Header;