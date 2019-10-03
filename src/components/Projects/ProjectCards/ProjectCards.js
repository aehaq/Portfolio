import React from "react";
import "./ProjectCards.css";
import { Col, Card, CardTitle, CardSubtitle, CardText, CardImg, CardImgOverlay, Button} from 'reactstrap';
import { Animated } from "react-animated-css";

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

        const deployed = this.props.siteLink;

        return(

        <Col xl="4" md="6" className="p-2">
            <Animated animationIn="flipInX" animationInDelay="150" isVisible={true}>
                <Card inverse>
                    <CardImg width="100%" src={this.props.preview} alt="Card image cap" onMouseEnter={this.showOverlay}/>
                    {/* <Animated animationIn="fadeIn" animationInDelay="1600" animationOut="fadeOut" isVisible={true}> */}
                        <CardImgOverlay className="bg-secondary overlay" 
                        style={{display: this.state.hover }}
                        onMouseLeave={this.hideOverlay}
                        >
                                <CardTitle>
                                <h2 className="text-center pt-3 project-title">
                                    {this.props.title}
                                </h2>
                                </CardTitle>
                                <CardSubtitle>
                                <div className="text-center">
                                    {deployed ? (
                                            <Button color="default" className="m-2"> <a href={this.props.siteLink}> Deployed </a> </Button>
                                        ) : ('')
                                    }
                                    <Button color="default" className="m-2"> <a href={this.props.gitHubLink}>  GitHub</a> </Button>
                                </div>
                                </CardSubtitle>
                                <hr className="my-2 buffer"/>
                                <CardText className="text-justify m-3 project-info">
                                    {this.props.description}
                                </CardText>
                        </CardImgOverlay>
                    {/* </Animated> */}
                </Card>
            </Animated>
        </Col>
        )
    }
}


export default ProjectCards;