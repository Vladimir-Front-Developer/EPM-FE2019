import PostsService from './services/PostsService'

class RenderPosts extends PostsService {
    constructor(nameContainer, countPosts){
        super()
        this.getPosts().then(posts => {
            this.posts = this.searchByRating(posts)
            this.render(nameContainer, countPosts)
        })
    }

    render(nameContainer, countPosts){
        if(!this.posts.length) throw new Error('no posts')
        if(!nameContainer) throw new Error('nameContainer undefined')
        if(!countPosts) throw new Error('countPosts undefined')
        let container = document.getElementById(nameContainer)
        for(let i = 0; i < countPosts; i++){
            container.append(this.getItem(this.posts[i], i))
        }
    }

    getItem(data, className){
        let div = document.createElement('div')
        div.id = String(data.id)
        div.className = className
        div.append(this.getImg(data.moks.img, 'blog__content__item__image'))
        div.append(this.getSubHeader(data.title, 'sub-header blog__content__item__header'))
        div.append(this.getText(data.moks.date, 'blog__content__item__date'))
        div.append(this.getText(data.rating, 'blog__content__item__rating'))
        div.append(this.getText(data.moks.text, 'blog__content__item__text'))
        div.append(this.getText(data.topics, 'blog__content__item__topics'))
        div.append(this.getBtn('read more', 'btn btn-style blog__content__item__button'))
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

    calculateAverageRating(arr) {
        return arr.map(el => {
            return {
                id: el.id,
                rating: this.getAverage(el.ratings),
                topics: el.topics,
                title: el.title,
                date: el.date,
                text: el.text,
                imgLink: el.imgLink
            }
        })
    }

    getAverage(arr) {
        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
    }

    searchByRating(items) {
        let averageRating = this.calculateAverageRating(items)
        return averageRating.sort((a, b) => { return b.rating - a.rating })
    }
}

export default RenderPosts