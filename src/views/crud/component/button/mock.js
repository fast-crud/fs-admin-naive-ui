import mockUtil from '/src/mock/base';
const options = {
  name: 'ComponentButton',
  idGenerator: 0,
};
const list = [
  {
    button: '张三',
    link: '此按钮跳转url字段的链接',
    url: 'https://www.baidu.com',
    link2: 'https://www.baidu.com',
  },
  {
    button: '李四',
    link: '此按钮跳转url字段的链接',
    url: 'https://www.baidu.com',
    link2: 'https://www.baidu.com',
  },
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;
