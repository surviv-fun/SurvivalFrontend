import React, { Component } from 'react';
export default class Home extends Component {
    componentDidMount() {
        document.title = 'surviv.fun | Home';
    }

    render() {
        return (
            <>
                <div className="Home">
                    <h2>Hier entsteht eine neue Website</h2>
                </div>
            </>
        );
    }
}
