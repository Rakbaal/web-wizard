import React from "react"
import { MenuItems } from "../../data/menuItems"
import MenuButton from "../button/menuButton"
import "./menu.scss"

export const isPair = (n: number):boolean => {
    return n % 2 === 0
}

export default function Menu() {
    const items:React.JSX.Element[] = []
    MenuItems.forEach((item, index) => items.push(<MenuButton route={item.route} right={isPair(index)} left={!isPair(index)} label={item.label} pictures={item.pictures} />))
    

    return (
        <div id="menu">
            {[...items]}
        </div>
    )
}
