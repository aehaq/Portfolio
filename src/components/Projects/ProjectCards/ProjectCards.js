import React from "react";
import "./ProjectCards.css";
import { Container, Row, Col } from 'reactstrap'

const ProjectCards = props => (
    <Col md="6">
    <p>{props.title}</p>
    </Col>
);

export default ProjectCards;