import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

function AlbumList() {

    const Album1 = {
        text: 'Album1',
        id: 1,
    }

    const Album2 = {
        text: 'Album2',
        id: 2,
    }

    const Album3 = {
        text: 'Album3',
        id: 3,
    }

    const [album] = useState([Album1, Album2, Album3])

    function randomNumGenerator(){
        const randomNum = Math.random() * 100000;
        const newNumber = Math.floor(randomNum);
        console.log('ID', randomNum);
        console.log('floored', newNumber);
        return newNumber;
    }


    return (
        <ul>
            {album.map((albumObject, index) => {
                return (

                    <li key={index}>
                    <Link to={`/album/${albumObject.id}`}>{ albumObject.text}</Link>

                    </li>
                );
            })}
        </ul>
    )
}

export default AlbumList;