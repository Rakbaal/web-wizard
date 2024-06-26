import "animate.css";
import React, { useState } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ScaleSet from "../../components/scaleSet/scaleSet";
import "../../style/layout.scss";
import Experience from "../../components/experience/experience";
import { realisations } from "../../data/realisations";
import ScaleFooter from "../../components/scaleFooter/scaleFooter";

export default function Realisations() {   
    const [selected, setSelected] = useState<string>("") 
    const experiences = realisations.map((realisation, index) => <Experience key={index} setSelected={setSelected} index={String(index)} alignment={index % 2 === 0 ? "right" : "left"} realisation={realisation} selected={selected === String(index)} />)
    return (
        <div id="realisations" className="layout">
            <div id="header">
                <PageTitle title="Mes Réalisations" />
            </div>
            <div id="body">
                <div id="experience-list">
                    {[...experiences]}
                </div>
            </div>
            <div id="footer">
                <ScaleFooter />
            </div>
        </div>
    )
}