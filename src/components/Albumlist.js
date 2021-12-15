import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";

function AlbumList() {

    const Album1 = {
        album_type: 'album',
        total_tracks: 3,
        images: {},
        name: 'Album1',
        release_date: Date(),
        artist: 'David',
        followers: 0,
        id: 1
    }

    const Album2 = {
        album_type: 'album',
        total_tracks: 3,
        images: {},
        name: 'Album2',
        release_date: Date(),
        artist: 'Dinko',
        followers: 0,
        id: 2
    }

    const Album3 = {
        album_type: 'album',
        total_tracks: 3,
        images: {},
        name: 'Album3',
        release_date: Date(),
        artist: 'Sven',
        followers: 0,
        id: 3
    }

    const [album] = useState([Album1, Album2, Album3]) 

    return (
        

        

        <div>
            <Container>

            <Row>




            {album.map((albumObject, index) => {
                return (
                            <Col className="col" >
                                <Card>

                                    <Card.Body>
                                        

                                        <Card.Title>
                                            <Link to={`/album/${albumObject.id}`}>
                                                {albumObject.name}
                                            </Link>
                                        </Card.Title>

                                        <Card.Text>
                                            {albumObject.artist}
                                        </Card.Text>

                                    </Card.Body>

                                </Card>
                            </Col>

                )
            })}

            </Row>

            <Container>
                <Row md={3}>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>


            </Container>


        </div>
    )

}
export default AlbumList;