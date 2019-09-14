import Api from '../services/Api'
import PostsService from './services/PostsService'

const api = new Api()
api.getPosts()
.then(dataPosts => new PostsService('blogContent', 3, dataPosts))
