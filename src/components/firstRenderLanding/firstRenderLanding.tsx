import React, { Dispatch, SetStateAction, useEffect } from "react"
import Door from "../door/door"

interface IProps {
    setFirstRender: Dispatch<SetStateAction<boolean>>
}

export default function FirstRenderLanding({setFirstRender, }: IProps) {
    sessionStorage.setItem("firstRender", "nope")

    useEffect(() => {
        const delay = setTimeout(() => {
            setFirstRender(false)
        }, 4700)

        return () => {
            clearTimeout(delay)
        }
    }, [])

    return (
        <div className="firstRenderLanding absolute">
            <div className="door-container">
                <Door />
                <Door bottom />
            </div>
        </div>
    )
}