/**
 * Copyright (c) LuciferMorningstarDev <contact@lucifer-morningstar.dev>
 * Copyright (c) surviv.fun <contact@surviv.fun>
 * Copyright (C) surviv.fun team and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import { Routes, Route } from 'react-router-dom';

import './App.scss';

export default class App extends React.Component {
    render() {
        return (
            <>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about/" element={<About />} />
                        <Route path="contact/" element={<Contact />} />
                    </Routes>
                </div>
            </>
        );
    }
}
