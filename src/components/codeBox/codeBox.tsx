import React, { useState } from "react"
import CodeInput from "../codeInput/codeInput"
import CvSections from "../cvSections/cvSections"
import "./codeBox.scss"

export default function CodeBox() {
    return (
        <div id="codeBox">
            <p>Vous disposez d'un code ?</p>
            <CodeInput />
        </div>
    )
}