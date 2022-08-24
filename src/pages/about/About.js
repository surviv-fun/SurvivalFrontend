import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class About extends Component {
    componentDidMount() {
        document.title = 'surviv.fun | About';
    }

    render() {
        return (
            <div className="About">
                About
                <Link to="/">Homepage</Link>
                <Link to="/contact">Kontakt</Link>
            </div>
        );
    }
}
