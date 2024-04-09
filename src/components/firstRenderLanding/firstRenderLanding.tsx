import React, { Dispatch, SetStateAction, useEffect } from "react"
import Door from "../door/door"

interface IProps {
    setFirstRender: Dispatch<SetStateAction<boolean>>
    setFocus: Dispatch<SetStateAction<boolean>>
}

export default function FirstRenderLanding({setFirstRender, setFocus}: IProps) {
    sessionStorage.setItem("firstRender", "nope")

    useEffect(() => {
        const delay = setTimeout(() => {
            setFirstRender(false)
            setFocus(true)
        }, 4700)

        return () => {
            clearTimeout(delay)
        }
    }, [])

    return (
        <div className="firstRenderLanding absolute">
            <div className="relative flex flex-col">
                <Door />
                <Door bottom />
            </div>
        </div>
    )
}