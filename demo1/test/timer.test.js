//文档：https://jestjs.io/docs/zh-Hans/timer-mocks
//原生的定时器函数(如：setTimeout, setInterval, clearTimeout, clearInterval)并不是很方便测试，因为程序需要等待相应的延时。
//通过 使用jest.useFakeTimers()模拟定时器函数，根据业务场景配合使用 jest.runAllTimers();【“快进”时间使得所有定时器回调被执行】 jest.runOnlyPendingTimers()【循环定时器】 等
import timer from "../demo/timerMocks";
jest.useFakeTimers();
test('模拟定时器',()=>{
    timer();
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
});
