// 文档：https://jestjs.io/docs/zh-Hans/asynchronous
import {callbackFetchData,promiseFetchDataSuccess,promiseFetchDataError} from "../demo/async";
const sourceData="mandy ma";
test('测试回调函数获取数据',done=>{
    function callback(data) {
        console.log(data)
        expect(data).toBe(sourceData);
        done();
    }
    callbackFetchData(callback)
});

test('测试promise获取数据 resolves',()=>{
    return expect(promiseFetchDataSuccess()).resolves.toBe(sourceData);
});

test.only('async/await  获取数据 resolves',async ()=>{
   await expect(promiseFetchDataSuccess()).resolves.toBe(sourceData);
});
