import linkedInLight from "../assets/linkedin-light.svg"
import linkedInDark from "../assets/linkedin-dark.svg"
import mailLight from "../assets/mail-light.svg"
import mailDark from "../assets/mail-dark.svg"
import phoneLight from "../assets/phone-light.svg"
import phoneDark from "../assets/phone-dark.svg"

export interface IContactItem {
    label: string,
    pictures: {
        dark: string,
        light: string
    },
    dest?: string
    right?: boolean
    copy?:string
}

export const contactItems: IContactItem[] = [
    {
        label: "@Léo Carpentier",
        pictures: {
            dark: linkedInDark,
            light: linkedInLight
        },
        dest: "https://www.linkedin.com/in/l%C3%A9o-carpentier-9a5aa2200/"
    },
    {
        label: "leocarp76@outlook.fr",
        pictures: {
            dark: mailDark,
            light: mailLight
        },
        dest: "mailto:leocarp76@outlook.fr",
        copy: "leocarp76@outlook.fr"
    },
    {
        label: "+336.19.38.54.26",
        pictures: {
            dark: phoneDark,
            light: phoneLight
        },
        copy: "+336.19.38.54.26"
    }
]