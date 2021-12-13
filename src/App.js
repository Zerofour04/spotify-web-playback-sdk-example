import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from "./Header";
import AlbumList from "./components/AlbumList";
import SongList from "./components/SongList";

function App() {


    return (
        <div className="App">
            <Router>
                <Link to="/album" className="top-button" role="button">Album</Link>
                <Route path="/" exact>
                    <Header/>
                </Route>
                <Route path="/album" exact>
                    <AlbumList/>
                </Route>
                <Route path="/album/:id" component={SongList}>

                </Route>
            </Router>
        </div>
  );
}

export default App;
