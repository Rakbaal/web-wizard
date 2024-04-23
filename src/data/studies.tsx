import IExperience from "../interfaces/experience"

export const studies: IExperience[] = [
    {
        "start": "2022",
        "finish": "2023",
        "label": "Bachelor CDA",
        "labelAnnotations": [
            "CDA : Concepteur/Développeur d'Applications"
        ],
        "place": "Ecole CESI de Rouen, à Saint-Etienne-du-Rouvray en France",
        "comment": `Effectuées en alternance à un rythme de 3 semaines en entreprise 
        pour 1 semaine en cours, j'en tire principalement des <b>compétences en gestion de projet</b>.
        <br/>Je retiens de cette année que <b>la majorité de l'évolution de mes compétences
        techniques est dûe aux 75% de mon temps passé en entreprise</b> (documenté dans "Mes&nbsp;Expériences").`,
        "type": "study"
    },
    {
        "start": "2020",
        "finish": "2022",
        "label": "BTS SIO option SLAM",
        "labelAnnotations": [
            "BTS : Brevet de Technicien Supérieur",
            "SIO : Service Informatique aux Organisations",
            "SLAM : Solutions Logicielles et Applications Métier"
        ],
        "place": "Lycée La Chataigneraie, à Mesnil-Esnard en France",
        "comment": `Première étape de ma réorientation vers le développement 
        informatique.<br/> J'y découvre le développement web
        <b>(javascript, php et Symfony)</b>, le développement d'applications 
        desktop (C#, WPF, Winform), les bases de données
        (SQL, SQL Server, MySQL, Merise et conception de MCD).
        Une emphase toute particulière a été mise sur <b>l'étude du RGPD</b> et de sa mise
        en conformité dans du code.
        <br/>2 stages obligatoires ont été menés au cours de ces études,
        ils sont documentés dans "Mes Expériences"
        <br/><br/>
        <span>A noter</span>:<br/> Sorti de ces études <b>premier de mon établissement</b> et <b>deuxième
         de promotion régionale</b>.`,
        "type": "study",
        "tools": [
            "Javascript", "C#", "Php", "Python",
            "HTML", "CSS", "Symfony", "SQL", 
            "T-SQL", "SQL Server",  "MySQL", 
            "MCD", "Merise", "Orienté Objet",  
            "RGPD", "Git", "Github", "Agile", "SCRUM",
        ] 
    },
    {
        "start": "2017",
        "finish": "2020",
        "label": "Licence LEA",
        "labelAnnotations": [
            "LEA : Langues Etrangères Appliquées"
        ],
        "place": "Université de Rouen, à Mont-Saint-Aignan en France",
        "comment": `Première expérience dans le monde des études supérieures.
        <br/>J'y développe mon niveau en langues étrangères et découvre
        plusieurs disciplines relatives au travail en entreprise telles que
        la <b>comptabilité</b>, 
        le <b>droit du travail</b> et surtout la <b>bureautique et
        culture numérique</b>, discipline pendant laquelle 
        je découvre le HTML/CSS, que j'apprécie beaucoup.
        `,
        "type": "study",
        "tools": [
            "HTML", "Word", "Excel",
            "Anglais", "Allemand", "Italien"
        ]
        
    },
    {
        "start": "2013",
        "finish": "2016",
        "label": "Baccalauréat Economique et Social",
        "place": "Lycée Thomas Corneille, à Barentin en France",
        "type": "study",
        "comment": `Diplôme français d'études secondaires axées principalement
                    sur l'étude des sciences économiques et sociales.`
    },
]