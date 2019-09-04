function BlogElements(containerBlog, dataPosts, renderCount) {
    this.render(containerBlog, dataPosts, renderCount)
}
Object.assign(BlogElements.prototype, {
    render: function(containerBlog, dataPosts, renderCount) {
        for(let i = 0; i < renderCount; i++){
            containerBlog.append(this.getItem(dataPosts[i], i))    
        }
    },
    getItem: function(item, idxImg) {
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
        blogItem.append(this.getTopics(item.topics))
        blogItem.append(this.getBtn())
        return blogItem
    },
    getImg: function(imgSrc) {
        const imgComp = document.createElement('img')
        imgComp.className = 'blog__content__item__image'
        imgComp.src = imgSrc
        imgComp.alt = 'iamge'
        return imgComp
    },
    getTitle: function(title) {
        const titleComp = document.createElement('h4')
        titleComp.className = 'sub-header blog__content__item__header'
        titleComp.innerHTML = title
        return titleComp
    },
    getDate: function(date) {
        const dateComp = document.createElement('p')
        dateComp.className = 'blog__content__item__date'
        dateComp.innerHTML = date
        return date
    },
    getRating: function(rating) {
        const ratingComp = document.createElement('p')
        ratingComp.className = 'blog__content__item__rating'
        ratingComp.innerHTML = `rating: ${rating}`
        return ratingComp
    },
    getText: function(text) {
        const textComp = document.createElement('p')
        textComp.className = 'blog__content__item__text'
        textComp.innerHTML = text
        return textComp
    },
    getTopics: function(topics) {
        const topicsComp = document.createElement('p')
        topicsComp.className = 'blog__content__item__topics'
        topicsComp.innerHTML = topics.join(', ')
        return topicsComp
    },
    getBtn: function() {
        const btn = document.createElement('button')
        btn.className = 'btn btn-style blog__content__item__button'
        btn.innerHTML = 'read more'
        return btn
    },
})
export default BlogElements