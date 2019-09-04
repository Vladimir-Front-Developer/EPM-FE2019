import RandomPosts from './RandomPosts'
import BlogElements from './BlogElements'
window.onload = function (){
    var blogContentComp = document.getElementById('blogContent')
    const PARAMS_RANDOM_POST = {
        countPosts: 30,
        ratingParams: {
            countRatings: 10,
            min: 1,
            max: 1000
        },
        topicsParams: {
            min: 1,
            max: 20
        }
    }
    const randomPosts = new RandomPosts()
    let randomPostsData = randomPosts.getPosts(PARAMS_RANDOM_POST)
    let blogElements1 = new BlogElements(blogContentComp, randomPostsData, 3)
    let blogElements2 = new BlogElements(blogContentComp, randomPostsData, 3)

    // Object.setPrototypeOf(RandomPosts.prototype, BlogElements.prototype)
    // const test = new RandomPosts()
    // test.render(blogContentComp, test.getPosts(PARAMS_RANDOM_POST), 3)

    // BlogElements.prototype = Object.create(RandomPosts)
    // let test = new BlogElements()
    // console.log(test.getPosts(PARAMS_RANDOM_POST))
}
