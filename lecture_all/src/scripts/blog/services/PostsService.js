import Api from '../../services/Api'

class PostsService extends Api {
    async getSortByRatingPosts() {
        let posts = await super.getPosts()
        if(!posts.length) throw new Error('no posts')
        let averageRating = this.calculateAverageRating(posts)
        return averageRating.sort((a, b) => { return b.rating - a.rating })
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
}

export default PostsService