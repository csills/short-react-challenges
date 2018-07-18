import React, { Component } from 'react';

class H1Header extends Component {
    render () {
        return (
            <h1>{this.props.h1Text}</h1>
        )
    }
}

export default H1Header;