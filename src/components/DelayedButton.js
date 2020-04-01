import React from 'react'

class DelayedButton extends React.Component {

    render() {
        return <button onClick={this.props.onReceiveCoordinates}>delayed</button>
    }
}

export default DelayedButton