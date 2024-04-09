import phoneLight from "../assets/phone-light.svg"
import phoneDark from "../assets/phone-dark.svg"
import suitcaseDark from "../assets/suitcase-dark.svg"
import suitcaseLight from "../assets/suitcase-light.svg"
import degreeDark from "../assets/degree-dark.svg"
import degreeLight from "../assets/degree-light.svg"
import codeDark from "../assets/code-dark.svg"
import codeLight from "../assets/code-light.svg"
interface IMenuItem {
    label: string
    pictures: {
        light: string,
        dark: string
    },
    route: string
}

export const MenuItems: IMenuItem[] = [
    {
        "label": "Me contacter",
        "route": "/contact",
        "pictures": {
            light: phoneLight,
            dark: phoneDark
        }
    },
    {
        "label": "Mes expériences",
        "route": "/experiences",
        "pictures": {
            light: suitcaseLight,
            dark: suitcaseDark
        }
    },
    {
        "label": "Ma Formation",
        "route": "studies",
        "pictures": {
            light: degreeLight,
            dark: degreeDark
        }
    },
    {
        "label": "Mes réalisations",
        "route": "realisations",
        "pictures": {
            light: codeLight,
            dark: codeDark
        }
    }
]