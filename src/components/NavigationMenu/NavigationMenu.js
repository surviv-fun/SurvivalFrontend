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

import { Link, useLocation } from 'react-router-dom';

import './NavigationMenu.scss';

export default function NavigationMenu() {
    const location = useLocation();
    const [path, setPath] = React.useState(location.pathname);

    React.useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    return (
        <nav className="NavigationMenu">
            <div className="brand"></div>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to={path === '/' ? '#' : '/'} className={path === '/' ? 'nav-link active' : 'nav-link '}>
                        Startseite
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={path === '/contact' ? '#' : '/contact'} className={path === '/contact' ? 'nav-link active' : 'nav-link '}>
                        Contact
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={path === '/about' ? '#' : '/about'} className={path === '/about' ? 'nav-link active' : 'nav-link '}>
                        Über Uns
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
