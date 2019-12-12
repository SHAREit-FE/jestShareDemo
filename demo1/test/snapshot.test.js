//快照：https://jestjs.io/docs/zh-Hans/snapshot-testing
import config from "../demo/snapshot";
test('snapshot 功能',()=>{
    expect(config()).toMatchSnapshot();
})