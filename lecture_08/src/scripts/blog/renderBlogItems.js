export default function (items, component){
    const getBlogItem = (item, imgSrc) => {
        let blogItem = document.createElement('div')
        blogItem.id = String(item.id)
        blogItem.className = 'blog__content__item'
        // blogItem.tabIndex = '0'
        blogItem.append(getBlogImg(imgSrc))
        blogItem.append(getBlogTitle(item.title))
        const dateMock = '15 Jan, 2015'
        blogItem.append(getBlogDate(dateMock))
        blogItem.append(getBlogRating(item.rating))
        const textMock = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'
        blogItem.append(getBlogText(textMock))
        blogItem.append(getBlogTopics(item.topics))
        blogItem.append(getBlogBtn())
        return blogItem
    }

    const getBlogImg = (imgSrc) => {
        const imgComp = document.createElement('img')
        imgComp.className = 'blog__content__item__image'
        imgComp.src = imgSrc
        imgComp.alt = 'iamge'
        return imgComp
    }

    const getBlogTitle = (title) => {
        const titleComp = document.createElement('h4')
        titleComp.className = 'sub-header blog__content__item__header'
        titleComp.innerHTML = title
        return titleComp
    }
    const getBlogDate = (date) => {
        const dateComp = document.createElement('p')
        dateComp.className = 'blog__content__item__date'
        dateComp.innerHTML = date
        return date
    }

    const getBlogRating = (rating) => {
        const ratingComp = document.createElement('p')
        ratingComp.className = 'blog__content__item__rating'
        ratingComp.innerHTML = `rating: ${rating}`
        return ratingComp
    }

    const getBlogText = (text) => {
        const textComp = document.createElement('p')
        textComp.className = 'blog__content__item__text'
        textComp.innerHTML = text
        return textComp
    }

    const getBlogTopics = (topics) => {
        const topicsComp = document.createElement('p')
        topicsComp.className = 'blog__content__item__topics'
        topicsComp.innerHTML = topics.join(', ')
        return topicsComp
    }

    const getBlogBtn = () => {
        const btn = document.createElement('button')
        btn.className = 'btn btn-style blog__content__item__button'
        btn.innerHTML = 'read more'
        return btn
    }

    const renderItems = (items) => {
        component.append(getBlogItem(items[0], './images/image_16.png'))
        component.append(getBlogItem(items[1], './images/image_14.png'))
        component.append(getBlogItem(items[2], './images/image_15.png'))
    }

    renderItems(items)
}