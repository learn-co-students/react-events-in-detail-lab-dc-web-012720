// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {

	handleEvent = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render(){
		return(
			<button onClick={this.handleEvent}/>
		)
	}
}

export default CoordinatesButton