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
    const verticalOffset = (i: number) => (i * 16) - 24

    const topSet = (i: number) => {
        return {
            top: `${verticalOffset(i)}%`,
            left: `${horizontalOffset(i)}%`,
            index: `${20 - i * 2}`,
        }
    }

    const bottomSet = (i: number) => {
        return {
            bottom: `${verticalOffset(i)}%`,
            left:   `${-horizontalOffset(i) - 16}%`,
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
            zIndex: `${index}`
        }}>
            {[...rows]}
        </div>
    )
}