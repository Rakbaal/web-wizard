import React, { useEffect } from "react";
import "./door.scss"
import ScaleSet from "../scaleSet/scaleSet";
import "animate.css"

interface IProps {
    bottom?: boolean
}

export default function Door({ bottom }: IProps) {

    return (
        <div id="door" className={`${bottom ? "bottomDoor" : "topDoor"}`} style={{
            height: "50%",
            width: "100%"
        }}>
            <ScaleSet rowNumber={5} rowLength={3} bottom={bottom} />
            <p id="doorText" className={`absolute ${bottom ? "bottomText" : "topText"}`}>
                {bottom ? "Welcome to my CV website !" : "Hello there 👋"}</p>
        </div>
    )
}