export function classToObject(cls: any) {
    let ob = JSON.stringify(cls)
    let obj = JSON.parse(ob)

    return (obj)
}