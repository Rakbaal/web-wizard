import React, { useEffect } from "react"
import "./scaleRow.scss"
import scale from "../../assets/scale.png"
import "animate.css"

interface IProps {
    length: number
    animated?: boolean
    i?: number
    styling?: {
        top?: string
        left?: string
        right?: string
        bottom?: string
        rotate?: string
        index?: string
    }
}

export default function ScaleRow({ animated, length, styling, i }: IProps) {
    let scales: React.JSX.Element[] = []
    for (let i = 0; i < length; i++) {
        scales.push(<img src={scale} className="scale" />)
    }

    return (
            <div id="scaleRow" className={`absolute w-fit h-fit flex flex-row ${animated ? `bounceDown-${i}` : ""}`} style={styling ? {
                top: styling.top,
                left: styling.left,
                bottom: styling.bottom,
                rotate: styling.rotate,
                zIndex: styling.index,
            } : {}}>
                {[...scales]}
            </div>
    )
}
