import "animate.css";
import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ScaleSet from "../../components/scaleSet/scaleSet";
import "../../style/layout.scss";
import "./experiences.scss";
import Experience from "../../components/experience/experience";
import { jobs } from "../../data/jobs";

export default function Experiences() {    
    const experiences = jobs.map((job, index) => <Experience key={index} alignment={index % 2 === 0 ? "right" : "left"} experience={job} />)
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
                <ScaleSet rowLength={15} rowNumber={2} bottom index={1} />
            </div>
        </div>
    )
}