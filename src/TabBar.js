import React from "react"
import * as ReactBootStrap from "react-bootstrap"

export class TabBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="TabBar">
                <ReactBootStrap.Navbar>
                    <ReactBootStrap.Navbar.Brand> ENERGi </ReactBootStrap.Navbar.Brand>
                </ReactBootStrap.Navbar>
            </div>
        )
    }

}