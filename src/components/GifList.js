import React from "react"

function GifList ({ firstThree }) {

    const renderFirstThree = firstThree.map((gif) => <img alt={gif.id} key={gif.id} src={gif.images.original.url}></img>)

    return (
        <ul>
           {renderFirstThree}
        </ul>
    )
}

export default GifList