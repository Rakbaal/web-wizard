import "animate.css";
import React, { useContext, useState } from "react";
import { NotificationContext } from "../../../contexts/notificationContext";
import { IContactItem } from "../../../data/contactItems";
import "./contactButton.scss";

export default function ContactButton({ label, pictures, dest, right, copy }: IContactItem) {
    const [currentPicture, setCurrentPicture] = useState<string>(pictures.light)
    const {setNotification} = useContext(NotificationContext)

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
                    if (copy) {
                        setNotification({
                            "message": "Texte copié",
                            "type": "message"
                        })
                        navigator.clipboard.writeText(copy)
                    }
                }}>
                <a href={dest} target={`${dest ? "_blank" : ""}`} >
                    <img src={currentPicture} />
                    <p>{label}</p>
                </a>
            </div>
        </div>
    )
}