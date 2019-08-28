import React, { Component } from "react";
import "./Projects.css";
import ProjectCards from "./ProjectCards";
import projects from "../../projects.json"; 
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap'

class Projects extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          filter: "Featured Projects",
          projects: projects,
          displayedProjects: projects.filter(project => project.tags.includes("Featured Projects"))
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    setFilter = (filter) => {
        this.setState({
            filter: filter,
            displayedProjects: projects.filter(project => project.tags.includes(filter))
        })
    }

    render() {
        return(
            <div className="project-section">
                <Row className="justify-content-center m-0 pt-3">
                    <p className="text-muted m-0 small"> Use this filter to see more projects. </p>
                </Row>
                {/* Update to its own "filter" component */}
                <Row className="justify-content-center pb-3" id="dropdown-filter">
                    <br />
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            {this.state.filter}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={() => this.setFilter("Featured Projects")} id="Featured Projects" >Featured Projects</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("Full-Stack")} id="Full-Stack" >Full-Stack</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("All")} id="All" >All</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Technologies</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("React")} id="React">React</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("jQuery")} id="jQuery">jQuery</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("Handlebars")} id="Handlebars">Handlebars</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("Node")} id="Node">Node</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("SQL")} id="SQL">SQL</DropdownItem>
                            <DropdownItem onClick={() => this.setFilter("APIs")} id="APIs">APIs</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </Row>
                {/* Update to its own "portfolio" component */}
                <Row className="justify-content-center m-3" id="project-cards">
                    {this.state.displayedProjects.map(project => (
                        <ProjectCards 
                        id={project.id}
                        title={project.title}
                        siteLink={project.siteLink}
                        gitHubLink={project.gitHubLink}
                        preview={project.preview}
                        role={project.role}
                        description={project.description}
                        />
                    ))}
                </Row>
            </div>
        )
    }
}

export default Projects;