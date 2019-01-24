import React from "react";
import "./ProjectCards.css";
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap'

const ProjectCards = props => (
    <Col lg="6">
        <Card inverse>
            <CardImg width="100%" src={props.preview} alt="Card image cap" />
            <CardImgOverlay className="bg-secondary p-5" style={{opacity: 0.8}}>
                <CardTitle>
                <h2 className="text-center">
                    {props.title}
                </h2>
                </CardTitle>
                <CardText>{props.description}</CardText>
                <CardText>
                    <small className="text-muted">{props.siteLink}</small>
                </CardText>
            </CardImgOverlay>
      </Card>

    <p></p>
    </Col>
);

export default ProjectCards;