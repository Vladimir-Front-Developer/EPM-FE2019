import config from './config'
class Api{
    async getPosts(){
        try {
            let res = await fetch(config.url.posts)
            return await res.json()
        } catch(err) {
            console.log(`ERROR getPosts: ${err}`)
            return []
        }
    }
}
export default Api