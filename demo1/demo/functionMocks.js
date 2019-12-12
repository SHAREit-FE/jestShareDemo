import axios from "axios"
export function funcMock1(callback){
    callback();
}

export  function funcMock2(items,callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

export function funcMock3() {
    return axios.get('/api').then(res=>res.data);
}
