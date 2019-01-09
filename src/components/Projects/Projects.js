import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
    render() {
        return(
            <div>
                <div className="filters">
                    
                    <div className="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filters
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                    </div>
                </div>
                <div className="cards">

                </div>
            </div>
        )
    }
}

export default Projects;