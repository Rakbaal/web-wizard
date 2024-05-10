import IExperience from "../interfaces/experience";

export const jobs: IExperience[] = [
    {
        "start": "Août 2022",
        "finish": "Décembre 2023",
        "label": "Développeur full-stack",
        "place": "Overspeed SARL, à Rouen en France",
        "comment": `Suite au bon déroulement de mon stage et au constat de ma curiosité et mon sérieux,
                    Overspeed m'engage comme développeur full-stack junior pour le développement d'un micro-CMS headless 
                    (Skald'Aura, documenté dans "Mes réalisations").`,
        "tasks": [
            "Design UX et UI",
            "Architecture logicielle (microservices)",
            "Intégration UI",
            "Développement d'API sécurisée (Gestion de DNS, JWT, reverse proxies, déploiement de certificats)",
            "Conception du modèle de données (MCD)",
            "Déploiement d'infrastructures",
            "Automatisation",
            "Réalisation de cahier des charges",
            "Gestion des tâches",
            "CI-CD"
        ],
        "tools": [
            "Typescript", "React", "Go",
            "Nginx", "Proxmox", "Docker",
            "MongoDB", "Terraform", "Ansible",
            "Gitlab CI", "Jira", "Open Project",
            "Git", "Gitlab", "LXC",
            "HTTPS", "JWT", "Figma",
            "OpenProject", "Jira"
        ],
        "type": "job"
    },
    {
        "start": "Janvier 2022",
        "finish": "Mars 2022",
        "label": "ERASMUS - Développeur back-end",
        "comment": `Au cours de ces 3 mois en Estonie, ma mission était de créer une plateforme de journalisation 
                    d'événements. Ces derniers étaient générés par un logiciel de détection de mouvements relié 
                    aux différentes caméras des locaux de K-Space.`,
        "place": "K-Space, à Tallinn en Estonie",
        "tasks": [
            "Traduction d'API de Python vers Javascript",
            "Développement d'une API Node pour le stream de logs (SSE)",
            "Mise en place d'un reverse Proxy",
            "Déploiement du code par CI-CD"
        ],
        "tools": [
            "Javascript", "React", "Node", 
            "Nginx", "Docker", "MongoDB",
            "Git", "Gitea", "CDN"
        ],
        "type": "internship"
    },
    {
        "start": "Mai 2020",
        "finish": "Juin 2020",
        "label": "Développeur back-end",
        "comment": `Stage déterminant dans ma carrière de développeur puisque c'est là que je suis pour la première
                    fois confronté aux concepts d'API et à l'utilisation du javascript
                    (via Node et React). Ma mission était de développer un outil de traduction
                    automatique en s'interfaçant avec l'API Google Translate.`,
        "place": "Overspeed SARL, à Rouen en France",
        "tasks": [
            `Développement d'une API Node`,
            `Développement d'interface simple pour le choix de langue`,
            `Interfaçage avec l'API Google Translate`,
            `Rédaction de documentation sur la documentation Google Translate`
        ],
        "tools": [
            "Git",
            "Gitlab",
            "React",
            "Javascript",
            "Node"
        ],
        "type": "internship"
    },
    {
        "start": "2020",
        "finish": "2022",
        "label": "Opérateur logistique en entrepôt",
        "place": "LIDL, à Honguemarre-Guénouville en France",
        "comment": `Job étudiant en parallèle de mon BTS SIO (documenté dans "Mes Études").
                    Dans le cadre de ce poste de manutention, je suis chargé de la préparation 
                    de palettes de produits à destinations des magasins LIDL de la région Normandie.`,
        "type": "job"
    },
    {
        "start": "Été 2022",
        "finish": "Été 2022",
        "label": "Agent d'accueil en accrobranche",
        "place": "Accrobranche de la base de loisirs de Jumièges, à Mesnil-sous-Jumièges en France",
        "comment": `Ma cinquième saison à la base de loisirs.
                    Ayant à ce stade fait le tour de tous les pôles, je demande à être réintégré à
                    l'équipe accrobranche de la base, où je suis à nouveau chargé de l'accueil, l'équipement
                    la formation et la surveillance des usagers.`,
        "type": "job"
    },
    {
        "start": "Été 2020",
        "finish": "Été 2020",
        "label": "Agent d'accueil en activités nautiques",
        "comment": `Ma quatrième saison à la base de loisirs.
                    Toujours dans l'optique de varier les expériences, je suis cette fois chargé de
                    l'accueil, l'équipement ainsi que de veiller à la sécurité des usagers du pôle nautique
                    de la base.`,
        "place": "Lac de la base de loisirs de Jumièges, à Mesnil-sous-Jumièges en France",
        "type": "job"
    },
    {
        "start": "Été 2019",
        "finish": "Été 2019",
        "label": "Agent d'accueil en accrobranche",
        "place": "Accrobranche de la base de loisirs de Jumièges, à Mesnil-sous-Jumièges en France",
        "comment": `Ma troisième saison au sein de la base de loisirs. 
                    Dans l'optique de découvrir différents postes, je demande cette
                    fois à être attitré à l'accrobranche, où je suis chargé d'accueillir, équiper, 
                    former et surveiller les usagers de la base.`,
        "type": "job"
    },
    {
        "start": "Été 2018",
        "finish": "Été 2018",
        "label": "Agent d'accueil en camping",
        "place": "Camping de la base de loisirs de Jumièges, à Mesnil-sous-Jumièges en France",
        "comment": `En constatant mon niveau en anglais l'été précédent, mon supérieur m'offre l'opportunité
                    de gérer le camping, ce qui implique la prise de réservations, l'attribution
                    des emplacements, et l'entretien des locaux du camping.`,
        "type": "job"
    },
    {
        "start": "Été 2017",
        "finish": "Été 2017",
        "label": "Agent de caféteria",
        "place": "Base de loisirs de Jumièges, à Mesnil-sous-Jumièges en France",
        "comment": `Ma toute première expérience professionnelle !
                    Le poste consistait en la préparation et la vente de sandwichs chauds,
                    frites, beignets, etc... au sein d'un snack dans la base de loisirs.`,
        "type": "job"
    }
]