import React, { Component } from 'react';


class RenderingState extends Component {
    constructor() {
        super();
        this.state = {
            cats: 5,
            dogs: 2
        }
    }


    render() {
        return (
            <div>
                <h1>Rendering State</h1>
                <h1>you have {this.state.cats} cats and {this.state.dogs} dogs,<br /> therefore you are a { this.state.cats > this.state.dogs ? "cat" : "dog" } person</h1>
            </div>
        )
    }
}

export default RenderingState;