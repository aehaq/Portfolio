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
                            <Row className="title-row"></Row>
                            <Row >
                                <Container className="img-container">
                                    <img src={profilePic} className="prof-pic" />
                                </Container>
                            </Row>
                        </Col>
                        <Col lg="4">
                            <Row className="title-row">
                                <h4>About Me</h4>
                            </Row>
                            <Row className="body-row  flex-column">
                                <p className="text-secondary blurb"> As a Full Stack Developer, I have built web applications from the ground up requiring Node runtime-environments, relational and non-relational databases, RESTful API architecture and front-end JavaScript frameworks, such as React and Handlebars.
                                    </p>
                                    <p className="text-secondary blurb">
                                    I am eager to build new features and applications as I enjoy untangling complex logical processes and pride myself on my ability to foresee issues and exercise prevention rather than remedy when writing code. Learning new frameworks and more efficient ways to create usable and useful tools for people to enjoy is my forte.
                                </p>
                            </Row>
                        </Col>
                        <Col lg="4">
                            <Row className="title-row">
                                <h4>Technical Skills</h4>
                            </Row>
                            <Row className="body-row flex-column">
                                <p><strong><u>Languages</u></strong></p>
                                <p><strong><u>Frameworks</u></strong></p>
                                <p><strong><u>Technologies</u></strong></p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Profile;