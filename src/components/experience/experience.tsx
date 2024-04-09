import React, { useState } from "react"
import IExperience from "../../interfaces/experience"
import arrowLight from "../../assets/dropdown-light.svg"
import arrowDark from "../../assets/dropdown-dark.svg"
import "./experience.scss"

interface IProps {
    experience: IExperience
    alignment: "right" | "left"
}

export default function Experience({ experience, alignment }: IProps) {
    const [currentPic, setCurrentPic] = useState(arrowLight)

    return (
        <div className={`experience-dropdown ${alignment}`}>
            <div className="wrapper button"
                onMouseEnter={() => setCurrentPic(arrowDark)}
                onMouseLeave={() => setCurrentPic(arrowLight)}>
                <img src={currentPic} />
                <div className="infoBox">
                    <p className="label">{experience.label}</p>
                    <div className="duration">
                        <p><span>Début:</span> {experience.start}</p>
                        <p><span>Fin:</span> {experience.finish}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}