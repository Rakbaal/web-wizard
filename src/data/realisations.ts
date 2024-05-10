import { IRealisation } from "../interfaces/realisation";

export const realisations:IRealisation[] = [
    {
        "label": "Ce site web (web-wizard.xyz)",
        "tools": [
            "React", "Typescript", "Git", "Github", 
            "Figma", "Nginx", "Raspberry", "GoDaddy", 
            "Certbot", "HTTPS", "DNS", "Reverse proxy", 
            "Ubuntu"
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
    },
    {
        "label": "Micro-CMS Skald'Aura",
        "tools": [
                "React", "Typescript", "Git", "Gitlab",
                "Gitlab CI", "Nginx", "Figma", "DNS",
                "HTTPS", "Reverse Proxy", "Gandi", "Go",
                "Gin Gonic", "Docker", "Docker-Compose",
                "Proxmox", "LXC", "Ubuntu Server", "Dockerhub"
            ],
        "link": "https://skaldaura.spin-io.fr",
        "comment": `Ma première mission professionnelle en tant que développeur. 
        <br/>Skald'Aura est un micro-CMS permettant d'éditer certains contenus de développements clients en temps réel
        sans rechargement de la page.
        <br/>Ce projet a nécessité de moi un panel complet de compétences, allant du <b>design UX/UI</b> au <b>développement et à la sécurisation d'API</b>,
        en passant par le <b>déploiement d'infrastructures</b>, la <b>conception de modèles de données</b>, la <b>mise en place de CI-CD</b>, ou encore le <b>développement
        d'outils d'intégration</b> par exemple.
        </br>Malheureuseument, l'ensemble de ce code étant la propriété de l'entreprise Overspeed, je ne dispose plus de ce dernier.<br/>`
    },
    {
        "label": "Développements client",
        "tools": [
            "Typescript", "React",
            "Gitlab", "Nginx", "Gandi"
        ],
        "comment": `Lors de mon année et demi chez Overspeed, en parallèle du développement de Skald'Aura, il m'était régulièrement demandé de
        développer des sites à format fixes pour nos clients. Ces sites n'avaient pas pour but d'être visualisés en ligne, mais servaient généralement
        à offrir une expérience interactive alternative aux kakemonos ou autres panneaux d'information au sein des établissements. 
        Les clients mandataires de ces sites disposaient en effet de "totems" aux dimensions mobile grand format, vendus par Overspeed. 
        De par leur nature fonctionnelle, et la présentce de données personnelles dont l'accès devait être restreint, 
        ces sites sont protégés par une page d'authentification (fonctionnalité de Skald'Aura) afin de limiter le plus strictement possible la visualisation 
        des données personnelles de ces sites.<br/>
        <a href="https://crjs-petit-couronne.spin-io.fr">Exemple de page d'authentification</a><br/>
        De ce fait, ces sites sont strictement privés et ne peuvent être consultés par autrui.`,
    },
    {
        "label": "Installation de serveur web",
        "comment": `Ce site est actuellement hébergé sur un raspberry installé, paramétré
        en tant que serveur web Nginx et sécurisé par mes soins, chez moi.`,
        "tools": [
            "Nginx", "Godaddy", "Certbot",
            "Ubuntu Server", "SSH", "UFW",
            "DNS"
        ]
    }
]