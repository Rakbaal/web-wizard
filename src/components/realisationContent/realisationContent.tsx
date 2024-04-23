import React from "react";
import HTMLReactParser from "html-react-parser/lib/index";
import { IRealisation } from "../../interfaces/realisation";
import "./realisationContent.scss"

interface IProps {
    realisation?: IRealisation,
    selected?: boolean
}

export default function RealisationContent({realisation, selected}: IProps) {
    return (
        <div className="infoBox">
            <p className="label">{realisation?.label}</p>
            {selected &&
            <div className="info-toggle">
                {realisation?.comment && <p><span>À propos de ce projet:</span> <br />{HTMLReactParser(realisation?.comment)}</p>}
                {realisation?.tools && <p className="tools"><span>Outils et technos:</span><ul>{realisation?.tools.map((tool, index) => <li key={index}>{HTMLReactParser(tool)}</li>)}</ul></p>}
                {realisation?.link && <p className="tasks"><a onClick={(e) => e.stopPropagation()} href={realisation.link} target="_blank">Lien vers le projet</a></p>}
            </div>}
        </div>
    )
}