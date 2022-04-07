import React from 'react';
import logo from './logo.svg';
import DateLine from "./Date";

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Spotify Player
            </p>
            <a
                className="App-link"
                href="https://www.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Spotify
            </a>
            <DateLine/>
        </header>
    )
}

export default Header;