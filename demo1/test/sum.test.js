// Jest使用“匹配器”让你可以用各种方式测试你的代码。
// 常用匹配器：https://jestjs.io/docs/zh-Hans/using-matchers
// 查看更多匹配器API：https://jestjs.io/docs/zh-Hans/expect
import sum from "../demo/sum";
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
