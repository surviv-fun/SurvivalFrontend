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

import { Link } from 'react-router-dom';

import MinecraftPingContainer from '../minecraft-ping/MinecraftPingContainer';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

import './Header.scss';

export default function Header() {
    return (
        <div className="Header no-select">
            <NavigationMenu />
            <div className="inline">
                <div className="logo">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/images/logo_roud.svg'} alt="" />
                    </Link>
                </div>
                <div className="content">
                    <MinecraftPingContainer />
                </div>
            </div>
        </div>
    );
}
