import BlogElements from './BlogElements'

window.onload = function (){
    const PARAMS_RANDOM_POST = {
        nameContainer: 'blogContent',
        renderCount: 3,
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
    let blogElements1 = new BlogElements(PARAMS_RANDOM_POST)
    let blogElements2 = new BlogElements(PARAMS_RANDOM_POST)
    blogElements1.render(PARAMS_RANDOM_POST)
    blogElements2.render(PARAMS_RANDOM_POST)

}
