export interface RenderItemInterface {
    type: string,
    style: string,
    value: string
}

export interface RenderableInterface{
    id: string,
    style: string,
    elements: Array<RenderItemInterface>
}