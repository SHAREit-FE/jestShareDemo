//模拟函数
// 1.捕获函数调用和返回结果，以及this和调用顺序
// 2.可以自由设置返回结果
// 3.改变函数的内部实现

//文档：https://jestjs.io/docs/zh-Hans/mock-functions
import axios from "axios"
jest.mock('axios');
import {funcMock1,funcMock2,funcMock3} from "../demo/functionMocks"
describe('测试 funcMock1 相关',()=>{
    test('测试 funcMock1 运行成功',()=>{
        // const func=()=>{
        //     return 'hello';
        // }
        // expect(funcMock1(func)).toBe('hello');

        const func=jest.fn();
        funcMock1(func);
        expect(func).toBeCalled()
    })
})



describe('测试 funcMock2 相关',()=>{
    const mockCallback = jest.fn(x => 42 + x);
    funcMock2([0,1], mockCallback);

    test('此 mock 函数被调用了两次',()=>{
        expect(mockCallback.mock.calls.length).toBe(2);
    });
    test('第一次调用函数时的第一个参数是 0',()=>{
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    test('第二次调用函数时的第一个参数是 1',()=>{
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    });
    test('第一次函数调用的返回值是 42',()=>{
        expect(mockCallback.mock.results[0].value).toBe(42);
    });
})

describe('测试 funcMock3 相关', ()=>{
    test('模拟axios',async () =>{
        axios.get.mockResolvedValue({data:'mandy'});
        await funcMock3().then(data=>{
            expect(data).toBe('mandy')
        })
    })
})
