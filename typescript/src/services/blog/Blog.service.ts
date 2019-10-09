import { RenderService } from "../render/Render.service";
import { RenderableInterface } from "../render/Render.interface"
import { BlogPostDataInterface } from "./Blog.interface";

export class BlogRenderer extends RenderService {
    constructor(name: string, count: number, data: Array<BlogPostDataInterface>){
        super()
        const itemsData = this.getItemsData(data, count)
        super.render(name, itemsData)
    }

    getItemsData(data: Array<BlogPostDataInterface>, count: number): Array<RenderableInterface>{
        const posts = this.sortByAverageRating(data).slice(0, count)
        return posts.map(el => {
            return {
                id: String(el.id),
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
                        value: String(el.rating)
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

    sortByAverageRating(posts: Array<BlogPostDataInterface>) {
        if(!posts.length) throw new Error('no posts')
        return posts
            .map(el => { return { ...el, rating: this.getAverage(el.ratings), } })
            .sort((a, b) => { return b.rating - a.rating })
    }

    getAverage(numbers: Array<number>): number {
        return Math.floor(numbers.reduce((a, b) => a + b) / numbers.length)
    }
}