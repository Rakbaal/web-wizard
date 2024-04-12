import React from "react";
import { INotification } from "../../interfaces/notification";
import "./notification.scss"

interface IProps {
    notification: INotification
}

export default function Notification({ notification }: IProps) {
    return (
        <div className="notification">
            <div className="message">
                <p className="title">{notification.type === "error" ? "Erreur" : "Message"}</p>
                <p>{notification.message}</p>
            </div>
        </div>
    )
}