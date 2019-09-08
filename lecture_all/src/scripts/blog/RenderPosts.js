import PostsService from './services/PostsService'

class RenderPosts extends PostsService {
    constructor(nameContainer, countPosts){
        super()
        this.getSortByRatingPosts().then(posts => this.render(nameContainer, posts, countPosts))
    }

    render(nameContainer, posts, countPosts){
        if(!nameContainer) throw new Error('nameContainer undefined')
        if(!countPosts) throw new Error('countPosts undefined')
        let container = document.getElementById(nameContainer)
        for(let i = 0; i < countPosts; i++){
            container.append(this.getItem(posts[i]))
        }
    }

    getItem(data){
        let div = document.createElement('div')
        div.id = String(data.id)
        div.className = 'blog__content__item'
        div.append(this.getImg(data.imgLink, 'blog__content__item__image'))
        div.append(this.getSubHeader(data.title, 'sub-header blog__content__item__header'))
        div.append(this.getText(data.date, 'blog__content__item__date'))
        div.append(this.getText(data.rating, 'blog__content__item__rating'))
        div.append(this.getText(data.text, 'blog__content__item__text'))
        div.append(this.getText(data.topics.join(', '), 'blog__content__item__topics'))
        div.append(this.getBtn('read more', 'btn btn-style blog__content__item__button'))
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
        h4.className = cls
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
        btn.className = cls
        btn.innerHTML = txt
        return btn
    }
}

export default RenderPosts