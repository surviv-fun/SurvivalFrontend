import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Contact extends Component {
    componentDidMount() {
        document.title = 'surviv.fun | Contact';
    }

    render() {
        return (
            <div className="Contact">
                Contact
                <Link to="/">Homepage</Link>
                <Link to="/about">Über uns</Link>
            </div>
        );
    }
}
