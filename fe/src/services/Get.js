import axios from 'axios'
import Port from '../helpers/Port'
const Get = (path, params) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${Port}/${path}`, {
            params
        })
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
    return promise
}

export default Get