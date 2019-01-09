import React, { Component } from "react";
import "./Projects.css";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class Projects extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        return(
            <div>
                <div className="filters">
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>JavaScript</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>Python</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
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