import React from "react";
import CodeBox from "../../components/codeBox/codeBox";
import Menu from "../../components/menu/menu";
import ScaleSet from "../../components/scaleSet/scaleSet";
import "./cv.scss";
import "../../style/layout.scss"
import "animate.css"

export default function CV() {
    return (
        <div id="cv-page" className="layout">
            <div id="header">
                <CodeBox />
            </div>
            <div id="body-1">
                <div className="wrapper">
                    <h1>Léo Carpentier</h1>
                    <h2>Développeur Web Full Stack</h2>
                    <div className="separator"/>
                </div>
            </div>
            <div id="body-2">
                <Menu />
            </div>

            <ScaleSet rowLength={15} rowNumber={2} bottom index={1} />
        </div>
    )
}