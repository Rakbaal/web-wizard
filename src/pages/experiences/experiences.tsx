import "animate.css";
import React, { useState } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ScaleSet from "../../components/scaleSet/scaleSet";
import "../../style/layout.scss";
import "./experiences.scss";
import Experience from "../../components/experience/experience";
import { jobs } from "../../data/jobs";
import ScaleFooter from "../../components/scaleFooter/scaleFooter";

export default function Experiences() {   
    const [selected, setSelected] = useState<string>("") 
    const experiences = jobs.map((job, index) => <Experience key={index} setSelected={setSelected} index={String(index)} alignment={index % 2 === 0 ? "right" : "left"} experience={job} selected={selected === String(index)} />)
    return (
        <div id="experience" className="layout">
            <div id="header">
                <PageTitle title="Mes Expériences" />
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