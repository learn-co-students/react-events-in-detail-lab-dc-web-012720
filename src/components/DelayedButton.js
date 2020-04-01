// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

	eventHandler = (event) => {
		event.persist()
		setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
	}

	render(){
		return(
			<button onClick={this.eventHandler}/>
		)
	}
}

export default DelayedButton