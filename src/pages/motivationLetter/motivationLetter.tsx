import React from "react";
import { useParams } from "react-router-dom";
import { motivationLetters } from "../../data/motivationLetters";
import "./motivationLetter.scss"

export default function MotivationLetter() {
    const {code} = useParams()

    const motivationLetter = motivationLetters.find(x => x.code === code)

    return (
        <div id="motivationLetter">
            <h1>Lettre de motivation</h1>
            {code}
            {motivationLetter && motivationLetter.content}
        </div>
    )
}