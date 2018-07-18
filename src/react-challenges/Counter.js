import React, { Component } from 'react';


class Counter extends Component {

    constructor() {
        super();
        this.state = {
            value: 0
        }
    }


    render() {

        return (
            <div>
                <h1>Counter</h1>
                <h1>{ this.state.value }</h1>
                <button onClick={ ()=>{ this.setState({value: this.state.value + 1 })} }><h1>PUSH ME</h1></button>
            </div>
        )
    }
}

export default Counter;