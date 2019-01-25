import React, {Component} from "react";
import "./Profile.css";
import { Container, Row, Col} from 'reactstrap'


class Profile extends Component {
   
    
    render() {

        const profilePic = "/assets/images/profilePic.jpg"
        
        return(
            <div>
                <Container>
                    <Row className="pt-3">
                        <Col lg="4">
                            <Container className="img-container">
                                <img src={profilePic} className="prof-pic" />
                            </Container>
                        </Col>
                        <Col lg="4">
                            <p className="m-2 text-secondary"> As a Full Stack Developer, I have built web applications from the ground up requiring Node runtime-environments, relational and non-relational databases, RESTful API architecture and front-end JavaScript frameworks, such as React and Handlebars.
                                <br />
                                I am eager to build new features and applications as I enjoy untangling complex logical processes and pride myself on my ability to foresee issues and exercise prevention rather than remedy when writing code. Learning new frameworks and more efficient ways to create usable and useful tools for people to enjoy is my forte.
                            </p>
                        </Col>
                        <Col lg="4">
                            <h4>Technical Skills</h4>
                            <p><strong>Languages:</strong></p>
                            <p><strong>Frameworks:</strong></p>
                            <p><strong>Technologies:</strong></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Profile;