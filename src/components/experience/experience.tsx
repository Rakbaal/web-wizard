import React, { useEffect, useState } from "react"
import IExperience from "../../interfaces/experience"
import arrowLight from "../../assets/dropdown-light.svg"
import arrowDark from "../../assets/dropdown-dark.svg"
import "./experience.scss"
import HTMLReactParser from "html-react-parser/lib/index"
import ExperienceContent from "../experienceContent/experienceContent"

interface IProps {
    experience?: IExperience
    alignment: "right" | "left"
    selected?: boolean
    setSelected: React.Dispatch<React.SetStateAction<string>>
    index: string
    realisation?:boolean
}

export default function Experience({ experience, alignment, selected, setSelected, index, realisation }: IProps) {
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
            {
                realisation ? <ExperienceContent selected={selected} realisation={realisation}> : <ExperienceContent selected={selected} experience={experience} />
            }
        </div>
    )
}