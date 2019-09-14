import Render from '../../services/Render'

class PostsService extends Render {
    constructor(name, count, data){
        super()
        let itemsData = this.getItemsData(data, count)
        super.render(name, itemsData)
    }
    
    getItemsData(data, count){
        let posts = this.getSortByRatingPosts(data).slice(0, count)
        return posts.map(el => {
            return {
                id: el.id,
                style: "blog__content__item",
                elements: [
                    {
                        type: "img",
                        style: "blog__content__item__image",
                        value: el.imgLink
                    },
                    {
                        type: "subHdr",
                        style: "blog__content__item__header",
                        value: el.title
                    },
                    {
                        type: "txt",
                        style: "blog__content__item__date",
                        value: el.date
                    },
                    {
                        type: "txt",
                        style: "blog__content__item__rating",
                        value: el.rating
                    },
                    {
                        type: "txt",
                        style: "blog__content__item__text",
                        value: el.text
                    },
                    {
                        type: "txt",
                        style: "blog__content__item__topics",
                        value: el.topics.join(', ')
                    },
                    {
                        type: "btn",
                        style: "blog__content__item__button",
                        value: "read more"
                    },
                ]
            }
        })
    }

    getSortByRatingPosts(posts) {
        if(!posts.length) throw new Error('no posts')
        let averageRating = this.calculateAverageRating(posts)
        return averageRating.sort((a, b) => { return b.rating - a.rating })
    }

    calculateAverageRating(arr) {
        return arr.map(el => {
            return {
                ...el,
                rating: this.getAverage(el.ratings),
            }
        })
    }

    getAverage(arr) {
        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
    }
}

export default PostsService