import React from "react";
import { useParams } from "react-router-dom";
import { motivationLetters } from "../../data/motivationLetters";
import "./motivationLetter.scss"
import { off } from "process";
import HTMLReactParser from "html-react-parser/lib/index";

export default function MotivationLetter() {
    const { code } = useParams()

    const motivationLetter = motivationLetters.find(x => x.code === code)
    const offer = `, tel que décrit dans <a id="job-offer" href="${motivationLetter?.offer}">votre récente offre d’emploi</a>`
    const picture = "/companies/" + motivationLetter?.picture    

    return (
        <div id="motivationLetter">
            <div id="wrapper">
                <h1>Lettre de motivation</h1>
                <div id="header">
                    <h1>{motivationLetter?.company}</h1>
                    <p>{motivationLetter?.address}</p>
                    <p>{motivationLetter?.city}</p>
                    <img id="company-logo" src={picture}/>
                </div>

                <p id="object"><span>Objet:</span> Candidature pour le poste de {motivationLetter?.job}</p>

                <div id="content">
                    <p id="introduction">
                        Madame, Monsieur, <br />
                        Je vous fais parvenir cette lettre pour vous informer du vif intérêt que
                        je porte au fait de rejoindre votre équipe en tant que {motivationLetter?.job}
                        {motivationLetter?.offer && HTMLReactParser(offer)}.
                    </p>

                    <p id="paragraphe-1">
                        {motivationLetter?.firstParagraph}
                    </p>

                    {motivationLetter?.secondParagraph &&
                        <p id="paragraphe-2">
                            {motivationLetter.secondParagraph}
                        </p>}

                    <p id="closing">
                        Je vous remercie grandement pour le temps consacré à la lecture de cette lettre, 
                        et vous invite à me contacter dans le cadre d’une entrevue si toutefois mon profil 
                        venait à vous intéresser.
                    </p>

                    <p id="salutations">
                    Je vous prie de recevoir, Madame, Monsieur, l’expression de mes salutations distinguées.
                    </p>
                </div>

                <div id="footer">
                        <p id="signature">Léo Carpentier</p>
                        <p id="address">2191 Avenue Royale</p>
                        <p id="city">Québec, G1C 1P2</p>
                        <p id="ml">leocarp76@outlook.fr</p>
                </div>
            </div>
        </div>
    )
}