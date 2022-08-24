import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Home extends Component {
    componentDidMount() {
        document.title = 'surviv.fun | Home';
    }

    render() {
        return (
            <div className="Home">
                Home
                <Link to="/about">Über uns</Link>
                <Link to="/contact">Kontakt</Link>
            </div>
        );
    }
}
