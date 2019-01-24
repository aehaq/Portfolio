import React from "react";
import "./ProjectCards.css";
import { Container, Row, Col, Card, CardTitle, CardSubtitle, CardText, CardImg, CardImgOverlay, Button} from 'reactstrap'

// constructor(props) {
//     super(props);
//     this.onMouseEnter = this.onMouseEnter.bind(this);
//     this.onMouseLeave = this.onMouseLeave.bind(this);
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false, icon: 'fas fa-angle-down'}
// }

// // NOTE: In Future replace this.state.status with an href for the up and down toggle arrows
// onEntering() {
//     this.setState({ 
//         icon: 'fas fa-angle-up'
//     })
// }

// onExiting() {
//     this.setState({ 
//         icon: 'fas fa-angle-down' 
//     })
// }

// toggle() {
//     this.setState({ 
//         collapse: !this.state.collapse
//     })
// }

const ProjectCards = props => (

    <Col xl="4" md="6" className="p-2">
        <Card inverse>
            <CardImg width="100%" src={props.preview} alt="Card image cap" />
            <CardImgOverlay className="bg-secondary overlay" 
            // style={this.state.hover}
            >
                    <CardTitle>
                    <h2 className="text-center pt-3">
                        {props.title}
                    </h2>
                    </CardTitle>
                    <hr className="my-3"/>
                    <CardSubtitle>
                    <div className="text-center">
                        <Button color="default" className="m-2"> Deployed </Button>
                        <Button color="default" className="m-2"> GitHub </Button>
                    </div>
                    </CardSubtitle>
                    <hr className="my-2"/>
                    <CardText className="text-justify m-3">
                        {props.description}
                    </CardText>
            </CardImgOverlay>
      </Card>
    </Col>
);

export default ProjectCards;