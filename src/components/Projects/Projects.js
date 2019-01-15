import React, { Component } from "react";
import "./Projects.css";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class Projects extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          filter: "Featured Projects"
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    setFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    render() {
        return(
            <div>
                <div className="filters">
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        {this.state.filter}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.setFilter("Featured Projects")} id="Featured Projects" >Featured Projects</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>JavaScript</DropdownItem>
                        <DropdownItem onClick={() => this.setFilter("React")} id="React">React</DropdownItem>
                        <DropdownItem onClick={() => this.setFilter("jQuery")} id="jQuery">jQuery</DropdownItem>
                        <DropdownItem onClick={() => this.setFilter("jQuery")} id="jQuery">Node</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>SQL</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem header>Front-End Tech</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                    
                </div>
                <div className="cards">

                </div>
            </div>
        )
    }
}

export default Projects;