import React, { Component } from 'react';
import H1Header from './Header_H1Text.js';

class Header extends Component {
    render() {
        return (
            <div>
                <H1Header h1Text="this is the first header"/>
                <H1Header h1Text="this is the second header"/>
                <H1Header h1Text="this is the third header"/>
            </div>
        )
    }
}

export default Header;