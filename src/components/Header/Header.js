import React, { Component } from "react";
import { Collapse, Button, Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import "./Header.css";

class Header extends Component {

    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, status: 'Open'}
    }

    // NOTE: In Future replace this.state.status with an href for the up and down toggle arrows
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
            <Container>
                <Row>
                    <Col sm="6">
                        <h1>Azzi Haq</h1>
                    </Col>
                    <Col sm="6">
                    <Nav className="float-md-right">
                        <NavLink className="text-info" href="#">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </Row>
                            <Row>
                            LinkedIn
                            </Row>
                        </NavLink>
                        <NavLink className="text-info" href="#">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fab fa-github"></i>
                                </a>
                            </Row>
                            <Row>
                            GitHub
                            </Row>
                        </NavLink>
                        <NavLink className="text-info" href="#">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fas fa-file"></i>
                                </a>
                            </Row>
                            <Row>
                            Resume
                            </Row>
                        </NavLink>
                        <NavLink className="text-info" href="#">
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
                        {/* <a>LinkedIn</a>
                        <a>GitHub</a>
                        <a>Resume</a>
                        <a>Contact</a> */}
                    </Col>
                </Row>
                <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onExiting={this.onExiting}>
                    <div>
                        <h1>
                            HELLO WORLD!
                        </h1>
                    </div>
                </Collapse>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                    <Button color="primary" onClick={this.toggle}>{this.state.status}</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            </header>
        )
    }
}

export default Header;