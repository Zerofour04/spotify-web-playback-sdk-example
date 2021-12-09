import React, {useEffect, useState} from "react";
import WebPlayback from "./WebPlayback";
import Login from "./Login";

function Player() {

    const [token, setToken] = useState('');

    useEffect(() => {
        async function getToken() {
            const response = await fetch('/auth/token');
            const json = await response.json();
            setToken(json.access_token);
        }
        getToken();
    }, []);
    return(
        <>
            { (token === '') ? <Login/> : <WebPlayback token={token} /> }
        </>
    )
}


export default Player;