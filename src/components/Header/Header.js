import React, { Component } from "react";
import { Collapse, Button, Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import "./Header.css";

class Header extends Component {

    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, icon: 'fas fa-angle-down'}
    }

    // NOTE: In Future replace this.state.status with an href for the up and down toggle arrows
    onEntering() {
        this.setState({ 
            icon: 'fas fa-angle-up'
        })
    }

    onExiting() {
        this.setState({ 
            icon: 'fas fa-angle-down' 
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
            <Container fluid >
                <Row className="pt-3">
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
                    {/* <Col></Col> */}
                    <Col md="6" sm="7">
                    <Nav className="float-sm-right justify-content-center">
                        <NavLink className="text-secondary m-1" href="#">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </Row>
                            <Row>
                            LinkedIn
                            </Row>
                        </NavLink>
                        <NavLink className="text-secondary m-1" href="#">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fab fa-github"></i>
                                </a>
                            </Row>
                            <Row>
                            GitHub
                            </Row>
                        </NavLink>
                        <NavLink className="text-secondary m-1" href="#">
                            <Row className="justify-content-center">
                                <a>
                                    <i className="fas fa-file"></i>
                                </a>
                            </Row>
                            <Row>
                            Resume
                            </Row>
                        </NavLink>
                        <NavLink className="text-secondary m-1" href="#">
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
                        <a onClick={this.toggle}>
                            <i className={this.state.icon}></i>
                        </a>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            </header>
        )
    }
}

export default Header;