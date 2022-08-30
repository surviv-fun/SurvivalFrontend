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

import ReactTypingEffect from 'react-typing-effect';

import './Header.scss';

export default function Header() {
    return (
        <div className="Header no-select">
            <div className="inline">
                <div className="logo">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/images/server-icon_purple.svg'} alt="" />
                    </Link>
                </div>
                <div className="content">
                    <ReactTypingEffect
                        eraseSpeed={150}
                        speed={200}
                        displayTextRenderer={(text) => {
                            return (
                                <>
                                    <h2 style={{ color: '#C0C0C0' }}>
                                        surviv.fun »{' '}
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <>
                                                    <span key={key} style={{ color: '#653af2' }}>
                                                        {char}
                                                    </span>
                                                </>
                                            );
                                        })}
                                    </h2>
                                </>
                            );
                        }}
                        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                        text={['Ein gefährliches Spiel!', 'Sind die Monster zu stark, bist du zu schwach!', 'Nimm dich vor dem "Zombum" in Acht!', 'Nichts für schwache Nerven.']}
                    />
                    <div className="content-description text-select">
                        <p className="first">{'( RELEASE VORAUSSICHTLICH AM 01.10.2022 )'}</p>
                        <code className="second">
                            Wenn du auf der Suche nach einem anspruchsvollem Minecraft Survival-Multi-Player Server bist...
                            <br />
                            Wenn du gelangweilt bist vom "default" Minecraft SMP...
                            <br />
                            Du denkst, dass du zu gut für den normalen Survival Modus bist...
                            <br />
                            Survival auf "Hard" noch zu einfach ist...
                            <br />
                            Du einen umfangreichen und gnadenlosen Spielmodus suchst...
                            <br />
                            Dich am besten gerne in einem Team zusammenfindest und auch mal andere Spieler bekämpfst...
                            <br />
                            <br />
                            ...dann bist du bei surviv.fun genau richtig!
                            <br />
                            <br />
                            Joine uns noch Heute unter der Addresse: surviv.fun
                            <br />
                        </code>
                    </div>
                </div>
            </div>

            <NavigationMenu>
                <MinecraftPingContainer />
            </NavigationMenu>
        </div>
    );
}
