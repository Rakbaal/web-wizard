import ScaleSet from "../../components/scaleSet/scaleSet";
import "./contact.scss"
import "../../style/layout.scss"
import "animate.css"
import React, { useEffect } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ContactButton from "../../components/button/contactButton/contactButton";
import { contactItems } from "../../data/contactItems";
import { isPair } from "../../components/menu/menu";
export default function Contact() {
    
    const items = contactItems.map((item, index) => <ContactButton key={index} label={item.label} copy={item.copy ? item.copy : ""} pictures={item.pictures} dest={item.dest} right={isPair(index)} />)

    useEffect(() => {
        console.log([...items])
    }, [])

    return (
        <div id="contact" className="layout">
            <div id="header">
                <PageTitle title="Me contacter" />
            </div>
            <div id="body">
                <div id="contact-list">
                    {[...items]}
                </div>
            </div>
            <div id="footer">
                <ScaleSet rowLength={15} rowNumber={2} bottom index={1} />
            </div>
        </div>
    )
}