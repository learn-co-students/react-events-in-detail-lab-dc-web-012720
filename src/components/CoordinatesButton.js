import React from 'react'

class CoordinatesButton extends React.Component {

    render() {
        return <button onClick={(e) => this.props.onReceiveCoordinates(e)}>coordinates</button>
    }
}

export default CoordinatesButton