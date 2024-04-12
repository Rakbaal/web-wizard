import React, { useContext, useEffect, useState } from "react"
import sendLogoLight from "../../assets/sendLogo-light.svg"
import sendLogoDark from "../../assets/sendLogo-dark.svg"
import "./codeInput.scss"
import { motivationLetters } from "../../data/motivationLetters"
import { INotification } from "../../interfaces/notification"
import { NotificationContext } from "../../contexts/notificationContext"
import { redirect, useNavigate } from "react-router-dom"



export default function CodeInput() {
    const [sendLogo, setSendLogo] = useState(sendLogoLight)
    const [input, setInput] = useState<string>("")
    const { notification, setNotification } = useContext(NotificationContext)
    const navigate = useNavigate()

    const assertCodeExistence = (code: string) => {
        return motivationLetters.find(x => x.code === code) != undefined
    }

    const submitCode = () => {
        if (assertCodeExistence(input)) {
            console.log("YES")
            navigate(`/motivation-letter/${input}`)
        } else {
            console.log("NOPE")
            const errorNotification: INotification = {
                "type": "error",
                "message": "Ce code n'existe pas, vérifie-le et réessaie !"
            }
            setNotification(errorNotification)
        }
    }

    return (
        <div id="codeInput">
            <form>
                <input type="number" value={input} placeholder="Entrez votre code"
                    onChange={(e) => setInput(String(e.target.value))} />
                <button id="code-input-send" type="submit"
                    onMouseEnter={() => {
                        setSendLogo(sendLogoDark)
                    }}
                    onMouseLeave={() => {
                        setSendLogo(sendLogoLight)
                    }}
                    onClick={(e) => {
                        e.preventDefault()
                        setSendLogo(sendLogoDark)
                        submitCode()
                    }}>

                    <img className="h-full z-0" src={sendLogo} />
                </button>
            </form>
        </div>
    )
}