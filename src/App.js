import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from "./Header";
import Player from "./Player";
import MainSide from "./components/SpotifySite";

function App() {


    return (
        <div className="App">
            <Router>
                <Link to="/mainside" className="top-button"role="button">Mainside</Link>
                <Link to="/player" className="top-button"role="button">Spotify player</Link>
                <Route path="/" exact>
                    <Header/>
                </Route>
                <Route path="/player">
                    <Player/>
                </Route>
                <Route path="/mainside">
                    <MainSide/>
                </Route>
            </Router>
        </div>
  );
}

export default App;
