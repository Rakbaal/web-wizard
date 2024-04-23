import ICarouselElement from "../interfaces/carouselElement";
import go from "../assets/technos/go.png"
import csharp from "../assets/technos/c-sharp.png"
import ts from "../assets/technos/ts.png"
import ansible from "../assets/technos/ansible.png"
import ci from "../assets/technos/ci.png"
import docker from "../assets/technos/docker.png"
import git from "../assets/technos/git.png"
import nginx from "../assets/technos/nginx.png"
import react from "../assets/technos/react.png"
import proxmox from "../assets/technos/proxmox.png"
import symfony from "../assets/technos/symfony.png"
import terraform from "../assets/technos/terraform.png"


export const technologies: ICarouselElement[] = [
    {
        "label": "Go",
        "picture": go
    },
    {
        "label": "C#",
        "picture": csharp
    },{
        "label": "Typescript",
        "picture": ts
    },{
        "label": "React",
        "picture": react
    },{
        "label": "Symfony",
        "picture": symfony
    },{
        "label": "Terraform",
        "picture": terraform
    },{
        "label": "Ansible",
        "picture": ansible
    },{
        "label": "Proxmox",
        "picture": proxmox
    },{
        "label": "Gitlab CI",
        "picture": ci
    },{
        "label": "Docker",
        "picture": docker
    },{
        "label": "Git",
        "picture": git
    },{
        "label": "Nginx",
        "picture": nginx
    },
]