import config from './config'
class RequestApi{
    getAll(path){
        return fetch(config.url[path])
        .then(res => res.json())
        .catch(err => { throw new Error(`ERROR getAll: ${ err }`) })
    }
}
export default RequestApi