import React, { Component } from 'react';

class EyesOnMe extends Component {
    constructor() {
        super();

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus() {
        console.log('Good!');
    }

    handleBlur() {
        console.log('Hey! Eyes on me!');
    }

    render() {
        return (
            <div>
                <button
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                >
                    Eyes on me, please!
                </button>
            </div>
        );
    }
}

module.exports = EyesOnMe
