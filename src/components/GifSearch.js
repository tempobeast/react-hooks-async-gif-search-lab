import React, { useState } from "react"

function GifSearch({ onSearchSubmit }) {

    const [searchChange, setSearchChange] = useState("")

    function handleChange(e) {
        setSearchChange(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSearchSubmit(searchChange);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Search Gifs: 
            <input type="text" name="search" onChange={handleChange}></input>
            </label>
            <input type="submit" value="submit" ></input>
        </form>

    )
}

export default GifSearch