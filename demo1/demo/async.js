//异步代码测试
//1.回调
const data="mandy ma";
export function callbackFetchData(callback) {
    setTimeout(()=>{
        callback(data);
    },600)

}
//2.promise success
export function promiseFetchDataSuccess() {
    return new Promise((resolve, reject) => {
        if(data){
            resolve(data)
        }else{
            reject('error')
        }
    })
}