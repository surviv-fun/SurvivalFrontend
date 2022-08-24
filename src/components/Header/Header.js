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
