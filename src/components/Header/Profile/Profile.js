import React, {Component} from "react";
import "./Profile.css";
import { Container, Row, Col} from 'reactstrap'


class Profile extends Component {
   
    
    render() {

        const profilePic = "/assets/images/profilePic.jpg"
        
        return(
            <div>
                <Container>
                    <Row>
                        <Col md="4">
                            <img src={profilePic} className="prof-pic" />
                        </Col>
                        <Col md="4">
                            
                        </Col>
                        <Col md="4">
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Profile;