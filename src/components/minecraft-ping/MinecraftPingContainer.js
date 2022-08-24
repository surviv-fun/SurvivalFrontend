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

import ComponentSerializer from 'minecraft-components/lib/ComponentSerializer';

import 'minecraft-components/css/components.min.css';
import './MinecraftPingContainer.scss';

let actualizeInterval = null;

export default function MinecraftPingContainer() {
    const titleId = React.useId();
    const motdId = React.useId();
    const imageId = React.useId();

    const [pingData, setPingData] = React.useState({ error: true });

    const fetchPingData = () => {
        fetch('https://api.surviv.fun/ping')
            .then((response) => response.json())
            .then((pingDataJson) => {
                if (!pingDataJson?.error) {
                    setPingData(pingDataJson?.ping);
                } else setPingData({ error: true });
            })
            .catch(console.error);
    };

    React.useEffect(() => {
        fetchPingData();
        if (!actualizeInterval) actualizeInterval = setInterval(fetchPingData, 5000);
    }, []);

    React.useEffect(() => {
        if (pingData?.error) return;

        let titleSerializer;
        if (pingData?.players?.max != null && pingData?.players?.online != null && pingData?.version?.name != null) {
            titleSerializer = new ComponentSerializer(`&7Minecraft Server &3» &6Online&7: &r&7&l[&r &8${pingData?.players?.online}&r &7&l/&r &8${pingData?.players?.max}&r &7&l] &r&7v&b${pingData?.version?.name}`);
        } else {
            titleSerializer = new ComponentSerializer('&7Minecraft Server');
        }

        const players = [];

        if (pingData?.players?.sample != null) {
            for (let player of pingData?.players?.sample || []) {
                players.push(player.name + '\n');
            }
        }

        const titleDiv = document.getElementById(titleId);
        const motdDiv = document.getElementById(motdId);
        const imageAttachment = document.getElementById(imageId);

        if (!motdDiv || !titleDiv || !imageAttachment) return;

        if (pingData?.favicon != null) {
            imageAttachment.src = pingData?.favicon;
        }

        if (pingData?.elements?.motd_html != null) motdDiv.innerHTML = pingData.elements.motd_html;

        titleDiv.innerHTML = titleSerializer.html();
        titleDiv.dataset.hover = players.join('\n');
    }, [pingData, motdId, titleId, imageId]);

    return (
        <>
            {pingData.error ? (
                <></>
            ) : (
                <div className="MinecraftPingContainer">
                    <div className="PingImage">
                        <img id={imageId} alt="ServerLogo" />
                    </div>
                    <div className="PingText">
                        <p className="title players" id={titleId}></p>
                        <span className="motd" id={motdId}></span>
                    </div>
                </div>
            )}
        </>
    );
}
