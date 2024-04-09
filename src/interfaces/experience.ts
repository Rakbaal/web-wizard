export default interface IExperience {
    start: string
    finish: string
    label: string
    labelAnnotations?: string[]
    place: string
    comment?: string
    type: "study" | "job" | "internship"
}