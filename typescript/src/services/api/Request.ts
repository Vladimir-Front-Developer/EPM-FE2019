import config from './config'
export class Request{
    getAll(path: string){
        return fetch(config.url[path])
            .then(res => res.json())
            .catch(err => { throw new Error(`ERROR getAll: ${ err }`) })
    }
}