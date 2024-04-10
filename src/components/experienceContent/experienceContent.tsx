import React from "react";
import IExperience from "../../interfaces/experience";
import HTMLReactParser from "html-react-parser/lib/index";

interface IProps {
    experience?: IExperience,
    selected?: boolean
}

export default function ExperienceContent({experience, selected}: IProps) {
    return (
        <div className="infoBox">
            <p className="label">{experience?.label}</p>
            <div className="duration">
                <p><span>Début:</span> {experience?.start}</p>
                <p><span>Fin:</span> {experience?.finish}</p>
            </div>
            {selected &&
            <div className="info-toggle">
                <p><span>Etablissement:</span> <br />{experience?.place}</p>
                {experience?.comment && <p><span>Description: </span><br />{HTMLReactParser(experience?.comment)}</p>}
                {experience?.tasks && <p className="tasks"><span>Tâches:</span><ul>{experience?.tasks.map((task, index) => <li key={index}>{HTMLReactParser(task)}</li>)}</ul></p>}
                {experience?.tools && <p className="tools"><span>Outils et technos:</span><ul>{experience?.tools.map((tool, index) => <li key={index}>{HTMLReactParser(tool)}</li>)}</ul></p>}
            </div>}
        </div>
    )
}