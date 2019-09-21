import RequestApi from '../services/RequestApi'
import PostsService from './services/PostsService'

const reqApi = new RequestApi()
reqApi.getAll('posts')
.then(dataPosts => new PostsService('blogContent', 3, dataPosts))