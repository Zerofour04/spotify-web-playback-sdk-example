import React from "react";

function SongList(props){

    const Song1 = {
        songName: 'Hello1',
        artist: 'David1',
        id: 1
    }

    const Song2 = {
        songName: 'Hallo1',
        artist: 'Dinko1',
        id: 2
    }

    const Song3 = {
        songName: 'Sven1',
        artist: 'Sven1',
        id: 3
    }

    let songList1 = {
        albumId: 1,
        songs: [Song1, Song2, Song3],
    }

    const Song4 = {
        songName: 'Hello2',
        artist: 'David2',
        id: 1
    }

    const Song5 = {
        songName: 'Hallo2',
        artist: 'Dinko2',
        id: 2
    }

    const Song6 = {
        songName: 'Sven2',
        artist: 'Sven2',
        id: 3
    }

    let songList2 = {
        albumId: 2,
        songs: [Song4, Song5, Song6]
    }

    const Song7 = {
        songName: 'Hello3',
        artist: 'David3',
        id: 1
    }

    const Song8 = {
        songName: 'Hallo3',
        artist: 'Dinko3',
        id: 2
    }

    const Song9 = {
        songName: 'Sven3',
        artist: 'Sven3',
        id: 3
    }

    let songList3 = {
        albumId: 3,
        songs: [Song7, Song8, Song9]
    }

    function getSongList(){
        const albumID = Number(props.match.params.id);
        console.log(albumID);
        console.log(songList1.albumId);
        if (albumID === songList1.albumId) {
            return songList1;
        } else if (albumID === songList2.albumId) {
            return songList2;
        } else if (albumID === songList3.albumId) {
            return songList3;
        }
    }

    return(
        <div>
        <p>{props.match.params.id}</p>
        <ul>
            {getSongList().songs?.map((songObject, index) => {
                return (
                    <li key={index}>
                        {songObject.songName}
                    </li>
                )})
            }


        </ul>
        </div>

    )

}

export default SongList