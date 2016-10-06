import React, { Component } from 'react';

class Keypad extends Component {
    constructor() {
        super();

        this.handleTyping = this.handleTyping.bind(this);
    }

    handleTyping() {
        console.log('Entering password...');
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    onKeyUp={this.handleTyping} />
            </div>
        );
    }
}

module.exports = Keypad
