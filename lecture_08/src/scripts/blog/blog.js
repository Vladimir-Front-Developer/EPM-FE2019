import getBlogData from './getBlogData'
import renderItemsBlog from './renderBlogItems'
window.onload = function (){
    var blogContentComp = document.getElementById('blogContent')
    let blogData = getBlogData()
    renderItemsBlog(blogData, blogContentComp)
}