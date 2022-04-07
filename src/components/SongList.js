import React from "react";
import Table from "react-bootstrap/Table";

function SongList(props) {

    const Song1 = {
        id: 1,
        artist: 'David1',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'Hello1'
    }

    const Song2 = {
        id: 2,
        artist: 'Dinko1',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'Hallo1'
    }

    const Song3 = {
        id: 3,
        artist: 'Sven1',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'Sven1',


    }

    let songList1 = {
        albumId: 1,
        songs: [Song1, Song2, Song3],
    }


    const Song4 = {
        id: 1,
        artist: 'David2',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'Hello2'
    }

    const Song5 = {
        id: 2,
        artist: 'Dinko2',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'Hallo2'
    }

    const Song6 = {
        id: 3,
        artist: 'Sven2',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'Sven2'
    }

    let songList2 = {
        albumId: 2,
        songs: [Song4, Song5, Song6]
    }


    const Song7 = {
        id: 1,
        artist: 'David3',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'David3'
    }

    const Song8 = {
        id: 2,
        artist: 'Dinko3',
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        name: 'Dinko3'
    }

    const Song9 = {
        id: 3,
        genre: 'pop',
        images: {},
        duration_ms: 3000,
        explicit: false,
        artist: 'Sven3',
        name: 'Sven3'
    }

    let songList3 = {
        albumId: 3,
        songs: [Song7, Song8, Song9]
    }

    function getSongList() {
        const albumID = Number(props.match.params.id);
        console.log('AlbumID:', albumID);
        console.log(songList1.albumId);
        if (albumID === songList1.albumId) {
            return songList1;
        } else if (albumID === songList2.albumId) {
            return songList2;
        } else if (albumID === songList3.albumId) {
            return songList3;
        }
    }


    return (
        <div>        
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>

                    <th>MusicID:</th>
                    <th>Musicname:</th>
                    <th>Artist:</th>
                    <th>Duration:</th>
                </tr>
            </thead>
            <tbody>
                {getSongList().songs?.map((songObject, index) => {
                        return (
                            <tr>
                                <td key={index}>{songObject.id}</td>
                                <td key={index}>{songObject.name}</td>
                                <td key={index}>{songObject.artist}</td>
                                <td key={index}>{songObject.duration_ms}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </Table>
        </div>


    )

}

export default SongList