class PostsService {
    async getPosts(url) {
        try {
            let res = await fetch('https://my-json-server.typicode.com/Vladimir-Front-Developer/EPM-FE2019/posts')
            return await res.json()
        } catch(err) {
            console.log(`ERROR getPosts: ${err}`)
            return []
        }
    }
}

export default PostsService