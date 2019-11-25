import axios from 'axios'
import Port from '../helpers/Port'
const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${Port}/${path}`, data)
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
    return promise
}

export default Post