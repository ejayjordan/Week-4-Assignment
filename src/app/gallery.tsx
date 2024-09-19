'use client'
import React from "react";
import Home from "./page";
import {myArray} from "./page";
let state = 0;

export default function Gallery(props: any){

    const [image, setImage] = React.useState("/pictures/melody1.jpg");

    function onClickPrevious(){
        state=state-1
            setImage(myArray[state]);
            if(state==-1){
                state=2
            }
            setImage(myArray[state])
            console.log({image})
        return(
            onClickPrevious
        )
    }

    function onClickNext(){
        state=state+1
        setImage(myArray[state]);
        if(state==3){
            state=0
        }
        setImage(myArray[state])
        console.log({image})
        return(
            onClickNext
        )
    }

    return (
        <div id="gallery">
            <h1>Gallery</h1>
            <img src={image}/>
                <button onClick={onClickPrevious}>Previous</button>
                <button onClick={onClickNext}>Next</button>
        </div>
    )
}

