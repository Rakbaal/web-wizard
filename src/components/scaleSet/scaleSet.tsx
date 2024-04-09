import React, { useEffect } from "react"
import ScaleRow from "../scaleRow/scaleRow"
import "animate.css"
import "./scaleSet.scss"

interface IProps {
    rowNumber: number
    rowLength: number
    bottom?: boolean
    index?: number
}

export default function ScaleSet({ rowNumber, rowLength, bottom, index }: IProps) {

    //#region methods

    const horizontalOffset = (i: number) => (i * 21) - 9 
    const verticalOffset = (i: number) => (i * 8) - 12

    const topSet = (i: number) => {
        return {
            top: `${verticalOffset(i)}vh`,
            left: `${horizontalOffset(i)}vw`,
            index: `${20 - i * 2}`,
        }
    }

    const bottomSet = (i: number) => {
        return {
            bottom: `${verticalOffset(i)}vh`,
            left:   `${-horizontalOffset(i) - 16}vw`,
            index: `${20 - i * 2}`,
            rotate: "180deg",
        }
    }

    //#endregion
    
    const rows: JSX.Element[] = []
    for (let i = 0; i < rowNumber; i++) {
        rows.push(
            <ScaleRow length={rowLength} styling={bottom ? bottomSet(i) : topSet(i)} animated i={i} key={"row-" + i}/>
        )
    }

    return (
        <div id="scaleSet" style={{
            position: "relative",
            overflow: "clip",
            height: "100%",
            left: "0vw",
            zIndex: `${index}`
        }}>
            {[...rows]}
        </div>
    )
}