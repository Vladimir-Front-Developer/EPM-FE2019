class Render {
    render(name, items){
        let comp = document.getElementById(name)
        for(let item of items){
            comp.append(this.getItem(item))
        }
    }

    getItem(item){
        let div = document.createElement('div')
        div.id = String(item.id)
        div.className = item.style
        item.elements.forEach(el => {
            let type = el.type
            switch (type) {
                case 'img':
                    div.append(this.getImg(el.value, el.style))
                    break
                case 'subHdr':
                    div.append(this.getSubHeader(el.value, el.style))
                    break
                case 'txt':
                    div.append(this.getText(el.value, el.style))
                    break
                case 'btn':
                    div.append(this.getBtn(el.value, el.style))
                    break
                default:
                    throw new Error('unknown type!')
            }
        })
        return div
    }

    getImg(src, cls){
        let img = document.createElement('img')
        img.className = cls
        img.src = src
        img.alt = 'image'
        return img
    }
    
    getSubHeader(txt, cls){
        let h4 = document.createElement('h4')
        h4.className = `sub-header ${cls}`
        h4.innerHTML = txt
        return h4
    }

    getText(txt, cls){
        let p = document.createElement('p')
        p.className = cls
        p.innerHTML = txt
        return p
    }

    getBtn(txt, cls){
        let btn = document.createElement('button')
        btn.className = `btn btn-style ${cls}`
        btn.innerHTML = txt
        return btn
    }
}

export default Render