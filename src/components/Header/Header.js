import React, { Component } from "react";
import { Collapse, Row, Col, Nav, NavLink } from 'reactstrap';
import "./Header.css";
import Profile from "./Profile";
import { Animated } from "react-animated-css";

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
                        <Animated animationIn="fadeInDown" animationInDelay="500" isVisible={true}>
                            <Row>
                                <Col md="3" xs="2">
                                </Col>
                                <Col>
                                <h1 className="text-secondary m-0">Azzi Haq</h1>
                                </Col>   
                            </Row>
                        </Animated>
                        <Animated animationIn="fadeInDown" animationInDelay="800" isVisible={true}>
                            <Row>
                                <Col md="3" xs="2">
                                </Col>
                                <Col>
                                <p className="text-secondary m-0"><i>/ɑziˈhʌk/</i></p>
                                </Col>          
                            </Row>
                        </Animated>
                        <Animated animationIn="fadeInDown" animationInDelay="1100" isVisible={true}>
                            <Row>
                                <Col md="3" xs="2">
                                </Col>
                                <Col>
                                <p className="text-secondary"><i>Noun.</i> <strong>  Full Stack Developer </strong> </p>
                                </Col>     
                            </Row>
                        </Animated>
                    </Col>
                        {/* Contact and Resume links */}
                    <Col md="6" sm="7">
                        <Nav className="float-sm-right justify-content-center">
                            <Animated animationIn="fadeInDown" animationInDelay="1200" isVisible={true}>
                                {/* LinkedIn */}
                                <NavLink className="text-secondary m-1" href="https://www.linkedin.com/in/azzihaq/">
                                    <Row className="justify-content-center">
                                        <span>
                                            <i className="fab fa-linkedin"></i>
                                        </span>
                                    </Row>
                                    <Row>
                                        LinkedIn
                                    </Row>
                                </NavLink>
                            </Animated>
                            <Animated animationIn="fadeInDown" animationInDelay="1400" isVisible={true}>
                                {/* GitHub */}
                                <NavLink className="text-secondary m-1" href="https://github.com/aehaq">
                                    <Row className="justify-content-center">
                                        <span>
                                            <i className="fab fa-github"></i>
                                        </span>
                                    </Row>
                                    <Row>
                                        GitHub
                                    </Row>
                                </NavLink>
                            </Animated>
                            <Animated animationIn="fadeInDown" animationInDelay="1600" isVisible={true}>
                                {/* Resume */}
                                <NavLink className="text-secondary m-1" href="assets/docs/AzziHaqResume.pdf">
                                    <Row className="justify-content-center">
                                        <span>
                                            <i className="fas fa-file"></i>
                                        </span>
                                    </Row>
                                    <Row>
                                        Resume
                                    </Row>
                                </NavLink>
                            </Animated>
                            <Animated animationIn="fadeInDown" animationInDelay="1800" isVisible={true}>
                                {/* MailTo link */}
                                <NavLink className="text-secondary m-1" href="mailto:azfarehaq@gmail.com">
                                    <Row className="justify-content-center">
                                        <span>
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </Row>
                                    <Row>
                                        Contact
                                    </Row>
                                </NavLink>
                            </Animated>
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
                        <Animated animationIn="tada" animationInDelay="2500" isVisible={true}>
                            <span onClick={this.toggle} style={{cursor: "pointer"}}>
                                <p className="text-muted m-0 small"> {this.state.aboutText} </p>
                                <i className={this.state.icon}></i>
                            </span>
                        </Animated>
                    </Col>
                    <Col></Col>
                </Row>
            </header>
        )
    }
}

export default Header;