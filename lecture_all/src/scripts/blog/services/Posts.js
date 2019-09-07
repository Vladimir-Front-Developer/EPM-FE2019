class Posts {
    get all() {
        return fetch('https://my-json-server.typicode.com/Vladimir-Front-Developer/EPM-FE2019/posts')
        .catch(err => console.log(`ERR get posts all: ${err}`))
    }
}