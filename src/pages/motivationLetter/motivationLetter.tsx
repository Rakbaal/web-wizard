import HTMLReactParser from "html-react-parser/lib/index";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import close from "../../assets/close.svg";
import { motivationLetters } from "../../data/motivationLetters";
import "./motivationLetter.scss";

export default function MotivationLetter() {
    const { code } = useParams()
    const navigate = useNavigate()
    const motivationLetter = motivationLetters.find(x => x.code === code)
    const offer = `, tel que décrit dans <a id="job-offer" href="${motivationLetter?.offer}">votre récente offre d’emploi</a>`
    const picture = "/companies/" + motivationLetter?.picture

    return (
        <div id="motivationLetter">
            <img id="close" src={close} onClick={() => navigate("/")} />
            <div id="wrapper">
                <h1>Lettre de motivation</h1>
                <div id="header">
                    <h1>{motivationLetter?.company}</h1>
                    <p>{motivationLetter?.address}</p>
                    <p>{motivationLetter?.city}</p>
                    <img id="company-logo" src={picture} />
                </div>

                <p id="object"><span>Objet:</span> Candidature pour le poste de {motivationLetter?.job}</p>

                <div id="content">
                    {
                        motivationLetter?.alt ?
                            HTMLReactParser(motivationLetter.alt) :
                            <>
                                <p id="introduction">
                                    Madame, Monsieur, <br />
                                    Je vous fais parvenir cette lettre pour vous informer du vif intérêt que
                                    je porte au fait de rejoindre l'équipe de {motivationLetter?.company} en tant que {motivationLetter?.job}
                                    {motivationLetter?.offer && HTMLReactParser(offer)}.
                                </p>

                                <p id="paragraphe-1">
                                    {motivationLetter?.firstParagraph ? HTMLReactParser(motivationLetter.firstParagraph) :
                                        `Fort d'une expérience professionnelle complète mêlant design d'architecture 
                            applicative, design UX/UI, développement web front & back end mais aussi mise en application de la 
                            philosophie Devops, je pense être un candidat idéal non seulement sur le plan technique, 
                            mais aussi sur le plan social! Mon naturel calme, réfléchi et à l'écoute font de moi
                            un collaborateur de choix lorsque le travail en équipe est de mise, tandis que mon insatiable
                            curiosité et mon autonomie font de moi un développeur tout-terrain, capable de s'adapter rapidement
                            à de nouveaux environnements et challenges en solo.`
                                    }
                                </p>

                                {motivationLetter?.secondParagraph &&
                                    <p id="paragraphe-2">
                                        {HTMLReactParser(motivationLetter.secondParagraph)}
                                    </p>}
                                <p id="closing">
                                    Je suis impatient de discuter plus en détail de ma candidature et de la manière
                                    dont je pourrais contribuer à la réussite de votre équipe, et vous remercie par
                                    avance de l'attention que vous porterez à ma candidature.
                                </p>

                                <p id="salutations">
                                    Je vous prie de recevoir, Madame, Monsieur, l’expression de mes salutations distinguées.
                                </p>
                            </>
                    }

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