import React, { Component } from 'react';
import CallbackButton from './CallbackButton';

class Callback extends Component {
    render() {
        return (
            <div>
                <CallbackButton buttonCallback={ ()=>{console.log('one')} }/>
                <CallbackButton buttonCallback={ ()=>{console.log('two')} }/>
            </div>
        )
    }
}

export default Callback;