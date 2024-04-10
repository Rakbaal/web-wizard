import React, { useEffect, useState } from "react"
import IExperience from "../../interfaces/experience"
import arrowLight from "../../assets/dropdown-light.svg"
import arrowDark from "../../assets/dropdown-dark.svg"
import "./experience.scss"
import HTMLReactParser from "html-react-parser/lib/index"

interface IProps {
    experience: IExperience
    alignment: "right" | "left"
    selected?: boolean
    setSelected: React.Dispatch<React.SetStateAction<string>>
    index: string
}

export default function Realisation({ experience, alignment, selected, setSelected, index }: IProps) {
    const [wasSelected, setWasSelected] = useState<boolean>(false)
    const [currentPic, setCurrentPic] = useState(arrowLight)
    const [animation, setAnimation] = useState<"" | "opening" | "closing">("")

    useEffect(() => {
        if (wasSelected && !selected) {
            setAnimation("closing")
            setWasSelected(false)
        }
        if (selected) {
            setAnimation("opening")
            setWasSelected(true)
        }
    }, [selected])

    const endAnimation = () => {
        setAnimation("")
    }

    return (
        <div id={`${selected ? "selected" : ""}`} className={`experience-dropdown wrapper button ${alignment} ${animation}`}
            onAnimationEnd={endAnimation}
            onMouseEnter={() => setCurrentPic(arrowDark)}
            onMouseLeave={() => setCurrentPic(arrowLight)}
            onClick={() => selected ? setSelected("") : setSelected(index)}>
            <img className="dropdown-indicator" src={currentPic} />
            <div className="infoBox">
                <p className="label">{experience.label}</p>
                <div className="duration">
                    <p><span>Début:</span> {experience.start}</p>
                    <p><span>Fin:</span> {experience.finish}</p>
                </div>
                {selected &&
                    <div className="info-toggle">
                        <p><span>Etablissement:</span> <br/>{experience.place}</p>
                        {experience.comment && <p><span>Description: </span><br/>{HTMLReactParser(experience.comment)}</p>}
                        {experience.tasks && <p className="tasks"><span>Tâches:</span><ul>{experience.tasks.map((task, index) => <li key={index}>{HTMLReactParser(task)}</li>)}</ul></p>}
                        {experience.tools && <p className="tools"><span>Outils et technos:</span><ul>{experience.tools.map((tool, index) => <li key={index}>{HTMLReactParser(tool)}</li>)}</ul></p>}
                    </div>}
            </div>
        </div>
    )
}