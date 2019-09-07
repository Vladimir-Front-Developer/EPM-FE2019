import Posts from './services/Posts'

function BlogElements(params) {
    // Posts.call(this, this.getPosts)
    this.params = params
    this.render = function() {
        all().then(resDataPosts => {
            let dataPosts = resDataPosts.json()
            let container = document.getElementById(this.params.nameContainer)
            for(let i = 0; i < this.params.renderCount; i++){
                container.append(this.getItem(dataPosts[i], i))
            }
        })
        .catch(err => `ERR get posts all: ${ err }`)
    }
    this.getItem = function(item, idxImg) {
        const DATE_MOCK = '15 Jan, 2015'
        const TEXT_MOCK = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'
        const IMGS_MOCK = ['./images/image_16.png', './images/image_14.png', '/images/image_15.png']
        let blogItem = document.createElement('div')
        blogItem.id = String(item.id)
        blogItem.className = 'blog__content__item'
        blogItem.append(this.getImg(IMGS_MOCK[idxImg] || './images/image_16.png'))
        blogItem.append(this.getTitle(item.title))
        blogItem.append(this.getDate(DATE_MOCK))
        blogItem.append(this.getRating(item.rating))
        blogItem.append(this.getText(TEXT_MOCK))
        blogItem.append(this.getTopic(item.topics))
        blogItem.append(this.getBtn())
        return blogItem
    }
    this.getImg = function(imgSrc) {
        let imgComp = document.createElement('img')
        imgComp.className = 'blog__content__item__image'
        imgComp.src = imgSrc
        imgComp.alt = 'iamge'
        return imgComp
    }
    this.getTitle = function(title) {
        let titleComp = document.createElement('h4')
        titleComp.className = 'sub-header blog__content__item__header'
        titleComp.innerHTML = title
        return titleComp
    }
    this.getDate = function(date) {
        let dateComp = document.createElement('p')
        dateComp.className = 'blog__content__item__date'
        dateComp.innerHTML = date
        return date
    }
    this.getRating = function(rating) {
        let ratingComp = document.createElement('p')
        ratingComp.className = 'blog__content__item__rating'
        ratingComp.innerHTML = `rating: ${rating}`
        return ratingComp
    }
    this.getText = function(text) {
        let textComp = document.createElement('p')
        textComp.className = 'blog__content__item__text'
        textComp.innerHTML = text
        return textComp
    }
    this.getTopic = function(topics) {
        let topicsComp = document.createElement('p')
        topicsComp.className = 'blog__content__item__topics'
        topicsComp.innerHTML = topics.join(', ')
        return topicsComp
    }
    this.getBtn = function() {
        let btn = document.createElement('button')
        btn.className = 'btn btn-style blog__content__item__button'
        btn.innerHTML = 'read more'
        return btn
    }
}
// Оставил чтобы разобрать на следующем занятии
// Object.assign(BlogElements.prototype, {
//     render: function(nameContainer, dataPosts, renderCount) {
//         let container = document.getElementById(nameContainer)
//         for(let i = 0; i < renderCount; i++){
//             container.append(this.getItem(dataPosts[i], i))
//         }
//     },
//     getItem: function(item, idxImg) {
//         const DATE_MOCK = '15 Jan, 2015'
//         const TEXT_MOCK = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'
//         const IMGS_MOCK = ['./images/image_16.png', './images/image_14.png', '/images/image_15.png']
//         let blogItem = document.createElement('div')
//         blogItem.id = String(item.id)
//         blogItem.className = 'blog__content__item'
//         blogItem.append(this.getImg(IMGS_MOCK[idxImg] || './images/image_16.png'))
//         blogItem.append(this.getTitle(item.title))
//         blogItem.append(this.getDate(DATE_MOCK))
//         blogItem.append(this.getRating(item.rating))
//         blogItem.append(this.getText(TEXT_MOCK))
//         blogItem.append(this.getTopics(item.topics))
//         blogItem.append(this.getBtn())
//         return blogItem
//     },
//     getImg: function(imgSrc) {
//         let imgComp = document.createElement('img')
//         imgComp.className = 'blog__content__item__image'
//         imgComp.src = imgSrc
//         imgComp.alt = 'iamge'
//         return imgComp
//     },
//     getTitle: function(title) {
//         let titleComp = document.createElement('h4')
//         titleComp.className = 'sub-header blog__content__item__header'
//         titleComp.innerHTML = title
//         return titleComp
//     },
//     getDate: function(date) {
//         let dateComp = document.createElement('p')
//         dateComp.className = 'blog__content__item__date'
//         dateComp.innerHTML = date
//         return date
//     },
//     getRating: function(rating) {
//         let ratingComp = document.createElement('p')
//         ratingComp.className = 'blog__content__item__rating'
//         ratingComp.innerHTML = `rating: ${rating}`
//         return ratingComp
//     },
//     getText: function(text) {
//         let textComp = document.createElement('p')
//         textComp.className = 'blog__content__item__text'
//         textComp.innerHTML = text
//         return textComp
//     },
//     getTopics: function(topics) {
//         let topicsComp = document.createElement('p')
//         topicsComp.className = 'blog__content__item__topics'
//         topicsComp.innerHTML = topics.join(', ')
//         return topicsComp
//     },
//     getBtn: function() {
//         let btn = document.createElement('button')
//         btn.className = 'btn btn-style blog__content__item__button'
//         btn.innerHTML = 'read more'
//         return btn
//     },
// })

BlogElements.prototype = Object.create(Posts.prototype)
BlogElements.prototype.constructor = Posts

export default BlogElements