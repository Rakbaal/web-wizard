import React, { useState } from "react";
import "./contactButton.scss"
import "animate.css"
import { IContactItem } from "../../../data/contactItems";

export default function ContactButton({ label, pictures, dest, right, copy }: IContactItem) {
    const [currentPicture, setCurrentPicture] = useState<string>(pictures.light)

    return (
        <div className={`contact-button `}>
            <div className={`button wrapper ${right ? "right": "left"}`}
                onMouseEnter={() => {
                    setCurrentPicture(pictures.dark)
                }}
                onMouseLeave={() => {
                    setCurrentPicture(pictures.light)
                }}
                onClick={() => {
                    navigator.clipboard.writeText(copy ? copy : "")
                }}>
                <a href={dest} target={`${dest ? "_blank" : ""}`} >
                    <img src={currentPicture} />
                    <p>{label}</p>
                </a>
            </div>
        </div>
    )
}