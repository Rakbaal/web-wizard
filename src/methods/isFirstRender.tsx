export default function assertFirstRender(): boolean {
    return sessionStorage.getItem("firstRender") === null
}