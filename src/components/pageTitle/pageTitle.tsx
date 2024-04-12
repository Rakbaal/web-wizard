import React, { useState } from "react";
import "./pageTitle.scss"
import { Link, useNavigate } from "react-router-dom";
import goBackLight from "../../assets/goBack-light.svg"
import goBackDark from "../../assets/goBack-dark.svg"

interface IProps {
    title: string
}

export default function PageTitle({title}:IProps) {
    const [currentPic, setCurrentPic] = useState<string>(goBackLight) 

    const navigate = useNavigate()
    return (
        <div id="pageTitle">
            <div onClick={() => navigate(-1)} className="backButton"
                onMouseEnter={() => setCurrentPic(goBackDark)}
                onMouseLeave={() => setCurrentPic(goBackLight)}>
                <img src={currentPic} />
            </div>
            <h1>{title}</h1>
        </div>
    )
}