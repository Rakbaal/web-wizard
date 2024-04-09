import React, { useEffect, useState } from "react";
import "./menuButton.scss"
import { Link } from "react-router-dom";

interface IProps {
    label: string,
    pictures: {
        light: string,
        dark: string
    },
    route: string,
    right?: boolean,
    left?: boolean
}
export default function MenuButton({ label, pictures, right, left, route }: IProps) {
    const [currentPicture, setCurrentPicture] = useState<string>(pictures.light)

    return (
        <div id="menu-button">
            <Link to={route}>
                <div className={`wrapper button ${right ? "right" : ""} ${left ? "left" : ""}`}
                    onMouseEnter={() => {
                        setCurrentPicture(pictures.dark)
                    }}
                    onMouseLeave={() => {
                        setCurrentPicture(pictures.light)
                    }}>
                    {right && <img src={currentPicture} />}
                    <p>{label}</p>
                    {left && <img src={currentPicture} />}
                </div>
            </Link>
        </div>
    )
}