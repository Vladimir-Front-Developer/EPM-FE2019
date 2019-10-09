import { RenderAbstract } from './Render.abstract'
import { RenderableInterface, RenderItemInterface } from "./Render.interface"

export class RenderService implements RenderAbstract{
    render(name: string, items: Array<RenderableInterface>): void{
        let comp = document.getElementById(name)
        for(let item of items){
            comp.append(this.createItem(item))
        }
    }

    createItem(item: RenderableInterface){
        let div = document.createElement('div')
        div.id = item.id
        div.className = item.style
        item.elements.forEach((el: RenderItemInterface) => {
            let type = el.type
            switch (type) {
                case 'img':
                    div.append(this.createImg(el.value, el.style))
                    break
                case 'subHdr':
                    div.append(this.createSubHeader(el.value, el.style))
                    break
                case 'txt':
                    div.append(this.createText(el.value, el.style))
                    break
                case 'btn':
                    div.append(this.createBtn(el.value, el.style))
                    break
                default:
                    throw new Error('unknown type!')
            }
        })
        return div
    }

    createImg(src: string, cls: string){
        let img = document.createElement('img')
        img.className = cls
        img.src = src
        img.alt = 'image'
        return img
    }

    createSubHeader(txt: string, cls: string){
        let h4 = document.createElement('h4')
        h4.className = `sub-header ${ cls }`
        h4.innerHTML = txt
        return h4
    }

    createText(txt: string, cls: string){
        let p = document.createElement('p')
        p.className = cls
        p.innerHTML = txt
        return p
    }

    createBtn(txt: string, cls: string){
        let btn = document.createElement('button')
        btn.className = `btn btn-style ${ cls }`
        btn.innerHTML = txt
        return btn
    }
}