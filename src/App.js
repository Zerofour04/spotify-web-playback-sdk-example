import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from "./images/Spotify_Logo_RGB_Green.png"

import Header from "./Header";
import AlbumList from "./components/AlbumList";
import SongList from "./components/SongList";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="https://www.spotify.com">
                            <img
                                src={logo}
                                width="100"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/" className="link">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/album" className="link">Album</Link>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <Route path="/" exact>
                    <Header />
                </Route>
                <Route path="/album" exact>
                    <AlbumList />
                </Route>
                <Route path="/album/:id" component={SongList}>
                </Route>
            </Router>
        </div>
    )
}

export default App;
