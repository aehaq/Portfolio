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
                            <p className="m-2 text-secondary"> As a Full Stack Developer, I have built web applications from the ground up requiring Node runtime-environments, relational and non-relational databases, RESTful API architecture and front-end JavaScript frameworks, such as React and Handlebars.
                                <br />
                                I am eager to build new features and applications as I enjoy untangling complex logical processes and pride myself on my ability to foresee issues and exercise prevention rather than remedy when writing code. Learning new frameworks and more efficient ways to create usable and useful tools for people to enjoy is my forte.
                            </p>
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