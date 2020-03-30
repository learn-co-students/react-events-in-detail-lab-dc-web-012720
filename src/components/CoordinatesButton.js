// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {

    clickEventHandler = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.clickEventHandler}></button>
        )
    }
}

export default CoordinatesButton