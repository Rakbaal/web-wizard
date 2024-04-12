import { IRealisation } from "../interfaces/realisation";

export const realisations:IRealisation[] = [
    {
        "label": "web-wizard.xyz",
        "tools": [
            "React", "Typescript", "Git", "Github", 
            "Figma", "Nginx", "Raspberry", "GoDaddy", 
            "Certbot", "HTTPS", "DNS", "Reverse proxy"
        ],
        "link": "https://github.com/Rakbaal/web-wizard",
        "comment": `Plus qu'un simple site CV, c'est mon image en tant que professionnel que ce projet reflète, ainsi
                    que la preuve concrète de mes compétences.
                    <br/>J'ai d'abord été mené, avec mes modestes connaissances en design, à créer une charte graphique à laquelle
                    répond ce site, mais aussi ma carte de visite (cf lien vers le projet, puis <b>lire le README.md</b>).
                    <br/>Suite à cela j'ai procédé à l'<b>achat du nom de domaine<b>, à la <b>mise en place d'un serveur web</b> sur un raspberry, 
                    à la <b>configuration du DNS</b>, puis au <b>déploiement des certificats</b> afin d'autoriser le HTTPS pour ce site.
                    <br/>Enfin, j'ai intégré ma maquette pour donner le présent résultat!`
    },
    {
        "label": "WIP - Jeu de fléchettes",
        "comment": `Je vis en colocation, et les jours ou on s'ennuie... On joue aux fléchettes! Mais pour le moment, nous comptons nous-même
                    les points sur des feuilles en papier. L'idéal serait évidemment pour nous d'avoir une application pour le calcul automatique des points!`
    }
]