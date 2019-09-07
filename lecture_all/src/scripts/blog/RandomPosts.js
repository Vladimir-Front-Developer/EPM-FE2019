function RandomPosts(postsParams){ this.params = postsParams }

Object.assign(RandomPosts.prototype, {
    getPosts: function (postsParams) {
        this.params = postsParams
        if(!this.params || !postsParams) throw new Error('no argument passed! {countPosts, ratingParams, topicsParams}')
        let { countPosts, ratingParams, topicsParams } = this.params
        let dataPosts = new Array(countPosts).fill('item', 0, countPosts).map((el, idx) => {
            return {
                id: idx++,
                title: `Title ${idx++}`,
                ratings: this.getRandomRatings(ratingParams),
                topics: this.getTopics(topicsParams)
            }
        })
        
        console.log(JSON.stringify(dataPosts))
        return this.searchByRating(dataPosts)
    },
    getRandomRatings: function (ratingParams) {
        this.params.ratingParams = ratingParams
        if(!this.params.ratingParams) throw new Error('no argument passed! {countRatings, min, max}')
        let { countRatings, min, max } = ratingParams
        return new Array(countRatings).fill('item', 0, countRatings).map(() => {
            return this.getRandomInt(min, max)
        })
    },
    getTopics: function (topicsParams) {
        this.params.topicsParams = topicsParams
        if(!this.params.topicsParams) throw new Error('no argument passed! {min, max}')
        let countTopics = this.getRandomInt(topicsParams.min, topicsParams.max)
        return new Array(countTopics).fill('i', 0, countTopics).map((el, idx) => {
            return `#Topic${ idx++ }`
        })
    },
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    },
    searchByRating: function (items) {
        let averageRating = this.calculateAverageRating(items)
        return averageRating.sort((a, b) => { return b.rating - a.rating })
    },
    calculateAverageRating: function (items) {
        return items.map(el => {
            return {
                id: el.id,
                rating: this.getAverage(el.ratings),
                topics: el.topics,
                title: el.title
            }
        })
    },
    getAverage: function (arr) {
        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
    },
})

export default RandomPosts