import React from "react";
import scale from "../../assets/scale.png"
import "animate.css"
import "./scaleFooter.scss"

export default function ScaleFooter() {

    return (
        <div id="scaleFooter">
            <div id="one" className="row">
                <img src={scale} />
                <img src={scale} />
                <img src={scale} />
                <img src={scale} />
            </div>
            <div id="two" className="row">
                <img src={scale} />
                <img src={scale} />
                <img src={scale} />
                <img src={scale} />
                <img src={scale} />
            </div>
        </div>
    )
}