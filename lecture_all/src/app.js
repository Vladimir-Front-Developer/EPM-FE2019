import './style.scss'
import RenderPosts from './scripts/blog/RenderPosts'
window.onload = function (){
    new RenderPosts('blogContent', 3)
}