import React, { useEffect, useState } from "react"
import sendLogoLight from "../../assets/sendLogo-light.svg"
import sendLogoDark from "../../assets/sendLogo-dark.svg"
import "./codeInput.scss"

export default function CodeInput() {
    const [sendLogo, setSendLogo] = useState(sendLogoLight)

    return (
        <div id="codeInput">
            <input type="number" placeholder="Entrez votre code" />
            <button id="code-input-send"
                onMouseEnter={() => {
                    setSendLogo(sendLogoDark)
                    console.log("test")
                }}
                onMouseLeave={() => {
                    setSendLogo(sendLogoLight)
                }}
                onClick={() => {
                    setSendLogo(sendLogoDark)
                }}>
                                    
                <img className="h-full z-0" src={sendLogo} />
            </button>
        </div>
    )
}