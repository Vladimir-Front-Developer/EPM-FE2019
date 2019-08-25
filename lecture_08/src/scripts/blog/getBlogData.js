export default function (){
    let data = []
    let id = 0
    const getItemsBlog = () => {
        id++
        let ratings = getRatings()
        let topics = getTopics()
        let title = `Title${id}`
        data.push({
            id: id,
            ratings: ratings,
            topics: topics,
            title: title
        })
        if(id === 30) return
        else getItemsBlog()
    }
    
    const getRatings = () => {
        let ratings = []
        const getRandomRatings = (min, max) => {
            let lengthArr = ratings.length
            ratings.push(getRandomInt(min, max))
            if(lengthArr < 9) getRandomRatings(1, 1000)
            else return
        }
        getRandomRatings(1, 1000)
        return ratings
    }
    
    const getTopics = () => {
        let topics = []
        let numTopics = getRandomInt(1, 20)
        let num = 0
        const getTopicItems = () => {
            if(topics.length < numTopics) {
                num++
                topics.push(`Topic${num}`)
                getTopicItems()
            } else return
        }
        getTopicItems()
        return topics
    }
    
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }
    
    const getAverage = (arr) => {
        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
    }
    
    const calculateAverageRating = (items) => {
        return items.map(el => {
            return {
                id: el.id,
                rating: getAverage(el.ratings),
                topics: el.topics,
                title: el.title
            }
        })
    }
    
    const searchByRating = (items) => {
        let averageRating = calculateAverageRating(items)
        return averageRating.sort((a, b) => { return b.rating - a.rating })
    }

    getItemsBlog()

    return searchByRating(data)
}