import { RenderableInterface } from "./Render.interface"

export abstract class RenderAbstract{
    abstract render(name: string, items: Array<RenderableInterface>): void
}
