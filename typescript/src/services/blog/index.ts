import { Request } from "../api/Request"
import { BlogRenderer } from "./Blog.service"

const request = new Request()
const path: string = 'posts'
request.getAll(path)
    .then(dataPosts => new BlogRenderer('blogContent', 3, dataPosts))