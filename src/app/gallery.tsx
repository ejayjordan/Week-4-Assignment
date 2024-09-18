'use client'
import React from "react";

export default function Gallery(){

    const [image, setImage] = React.useState(0);

    function onClickPrevious(){
            setImage(image - 1);
            console.log("test")
        return(
            onClickPrevious
        )
    }

    function onClickNext(){
        setImage(image + 1);
        console.log("test")
        return(
            onClickNext
        )
    }

    return (
        <div id="gallery">
            <h1>Gallery</h1>
                <button onClick={onClickPrevious}>Previous</button>
                <image></image>
                <button onClick={onClickNext}>Next</button>
        </div>
    )
}

