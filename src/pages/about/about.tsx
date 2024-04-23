import "animate.css";
import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ScaleFooter from "../../components/scaleFooter/scaleFooter";
import "../../style/layout.scss";
import "./about.scss";
import picture from "../../assets/me-noBG.png"

export default function About() {

    return (
        <div id="about" className="layout">
            <div className="header">
                <PageTitle title="À propos de moi" />
            </div>

            <div id="body">
                <img src={picture} />
                <div>
                    Hey ! Moi c'est Léo, j'ai 25 ans, et je suis 
                    développeur full stack ! J'aime (un peu trop) 
                    
                </div>
                <div>
                    Pourquoi le développement ? Parce que les règles
                    du développement sont avant tout dictées par la logique, 
                    autrement dit, des règles concrètes, constantes et irréfutables...
                    Mais aussi parce que c'est un métier qui demande d'apprendre au quotidien !
                    Quoi de mieux 
                </div>
                <div>
                    Mes hobbys.
                    J'adore l'escalade en bloc et en voie, les randonnées en pleine nature,
                    la musique, la lecture
                </div>
            </div>

            <div id="footer">
                <ScaleFooter />
            </div>
        </div>
    )
}