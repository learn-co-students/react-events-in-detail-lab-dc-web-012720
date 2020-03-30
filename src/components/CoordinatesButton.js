import React, {Component} from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let x = event.clientX
        let y = event.clientY
        let coordinates = [x, y]
        this.props.onReceiveCoordinates(coordinates)
    }

    render(){
        return (
            <button onClick = {this.handleClick} >Coordinates</button>
        )
    }
}

// Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.

export default CoordinatesButton