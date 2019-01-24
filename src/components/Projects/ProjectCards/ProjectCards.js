import React from "react";
import "./ProjectCards.css";
import { Container, Row, Col, Card, CardTitle, CardSubtitle, CardText, CardImg, CardImgOverlay, Button} from 'reactstrap'


class ProjectCards extends React.Component {
    constructor(props) {
        super(props);
        this.showOverlay = this.showOverlay.bind(this);
        this.hideOverlay = this.hideOverlay.bind(this);
        this.state = { hover: 'none'}
    }
    
    // NOTE: In Future replace this.state.status with an href for the up and down toggle arrows
   showOverlay() {
        this.setState({ 
            hover: 'inline'
        })
    }
    
   hideOverlay() {
        this.setState({ 
            hover: 'none' 
        })
    }

    render() {
        return(

        <Col xl="4" md="6" className="p-2">
            <Card inverse>
                <CardImg width="100%" src={this.props.preview} alt="Card image cap" onMouseEnter={this.showOverlay}/>
                <CardImgOverlay className="bg-secondary overlay" 
                style={{display: this.state.hover }}
                onMouseLeave={this.hideOverlay}
                >
                        <CardTitle>
                        <h2 className="text-center pt-3">
                            {this.props.title}
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
                            {this.props.description}
                        </CardText>
                </CardImgOverlay>
          </Card>
        </Col>
        )
    }
}


export default ProjectCards;