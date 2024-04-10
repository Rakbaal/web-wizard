import React from "react";
import IExperience from "../../interfaces/experience";
import HTMLReactParser from "html-react-parser/lib/index";

interface IProps {
    realisation?: IExperience,
    selected?: boolean
}

export default function RealisationContent({realisation, selected}: IProps) {
    return (
        <div className="infoBox">
            <p className="label">{realisation?.label}</p>
            <div className="duration">
                <p><span>Début:</span> {realisation?.start}</p>
                <p><span>Fin:</span> {realisation?.finish}</p>
            </div>
            {selected &&
            <div className="info-toggle">
                <p><span>Etablissement:</span> <br />{realisation?.place}</p>
                {realisation?.comment && <p><span>Description: </span><br />{HTMLReactParser(realisation?.comment)}</p>}
                {realisation?.tasks && <p className="tasks"><span>Tâches:</span><ul>{realisation?.tasks.map((task, index) => <li key={index}>{HTMLReactParser(task)}</li>)}</ul></p>}
                {realisation?.tools && <p className="tools"><span>Outils et technos:</span><ul>{realisation?.tools.map((tool, index) => <li key={index}>{HTMLReactParser(tool)}</li>)}</ul></p>}
            </div>}
        </div>
    )
}