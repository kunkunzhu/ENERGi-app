import React from "react";

export class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div className="Graph">
                {this.props.name}
            </div>
        )
    }

}
