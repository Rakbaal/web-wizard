import IExperience from "../interfaces/experience"

export const studies: IExperience[] = [
    {
        "start": "2013",
        "finish": "2016",
        "label": "Baccalauréat Economique et Social",
        "place": "Lycée Thomas Corneille, à Barentin en France",
        "type": "study"
    },
    {
        "start": "2017",
        "finish": "2020",
        "label": "Licence LEA",
        "place": "Université de Rouen, à Mont-Saint-Aignan en France",
        "comment": `Ma première expérience dans le monde des études supérieures ! 
                    J'ai pu y développer mon niveau en langues et découvrir
                    plusieurs disciplines relatives au travail en entreprise,
                    notamment via des cours de <span>comptabilité</span>, 
                    <span>droit du travail</span> et surtout de <span>bureautique et
                    culture numérique</span> durant lesquels je découvre le HTML/CSS,
                    pour lesquelles je découvre un réel attrait.
                    `,
        "type": "study"

    },
    {
        "start": "2020",
        "finish": "2022",
        "label": "BTS SIO option SLAM",
        "labelAnnotations": [
            "Brevet de Technicien Supérieur",
            "Service Informatique aux Organisations",
            "Solutions Logicielles et Applications Métier"
        ],
        "place": "Lycée La Chataigneraie, à Mesnil-Esnard en France",
        "comment": `Première étape de ma réorientation vers le développement 
                    informatique durant laquelle je découvre le développement web
                    (javascript, php et Symfony), le développement d'applications 
                    desktop (C#, WPF, Winform), les bases de données
                    (SQL, SQL Server, MySQL, Merise et conception de MCD).
                    Une emphase toute particulière a été mise sur l'étude du RGPD et de sa mise
                    en conformité au cours des deux ans.
                    2 stages obligatoires ont été menés au cours de ces études,
                    ils sont documentés dans "Mes Expériences"
                    
                    NB: Sorti de ces études deuxième de promotion régionale`,
        "type": "study"
    },
    {
        "start": "2022",
        "finish": "2023",
        "label": "Bachelor CDA",
        "labelAnnotations": [
            "Concepteur Développeur d'Applications"
        ],
        "place": "Ecole CESI de Rouen, à Saint-Etienne-du-Rouvray en France",
        "comment": `Effectuées en alternance à un rythme de 3 semaines en entreprise 
                    pour 1 semaine en cours, ces études m'ont principalement apporté des compétences
                    en termes de gestion de projets.
                    Je retiens de cette année que la grande majorité de l'évolution de mes compétences
                    techniques est dûe aux 75% de mon temps passé en entreprise. 
                    Ces derniers sont documentés dans "Mes Expériences"`,
        "type": "study"
    }
]