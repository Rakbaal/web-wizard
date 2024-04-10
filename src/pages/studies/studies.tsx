import "animate.css";
import React, { useState } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ScaleSet from "../../components/scaleSet/scaleSet";
import "../../style/layout.scss";
import Experience from "../../components/experience/experience";
import { studies } from "../../data/studies";

export default function Studies() {   
    const [selected, setSelected] = useState<string>("") 
    const experiences = studies.map((job, index) => <Experience key={index} setSelected={setSelected} index={String(index)} alignment={index % 2 === 0 ? "right" : "left"} experience={job} selected={selected === String(index)} />)
    return (
        <div id="studies" className="layout">
            <div id="header">
                <PageTitle title="Mes Études" />
            </div>
            <div id="body">
                <div id="experience-list">
                    {[...experiences]}
                </div>
            </div>
            <div id="footer">
                <ScaleSet rowLength={15} rowNumber={2} bottom index={1} />
            </div>
        </div>
    )
}