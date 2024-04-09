import React from "react";
import "./pageTitle.scss"

interface IProps {
    title: string
}

export default function PageTitle({title}:IProps) {

    return (
        <div id="pageTitle">
            <h1>{title}</h1>
        </div>
    )
}