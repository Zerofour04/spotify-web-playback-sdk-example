import React, {useState} from "react";

function Search(){

    const [searchInput, setSearchInput] = useState('');

    function removeSearchInput(){
        setSearchInput('')
    }

    return(
        <h1>Top</h1>

    )
}

export default Search;