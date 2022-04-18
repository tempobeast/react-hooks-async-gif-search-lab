import React, { useState, useEffect } from "react";
import GifSearch from "./GifSearch"
import GifList from "./GifList"

function GifListContainer() {

    const [firstThree, setFirstThree] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=TjSEeTUawYU6jojOH2K4579v2IsVnH3r`)
        .then((res) => res.json())
        .then((data) => setFirstThree(data.data.slice(0, 3)))
    }, [search])

    function onSearchSubmit(currentSearch) {
        setSearch(currentSearch)
    }

    return (
        <div>
            <GifSearch onSearchSubmit={onSearchSubmit}/>
            <GifList firstThree={firstThree}/>
        </div>
    );
}

export default GifListContainer