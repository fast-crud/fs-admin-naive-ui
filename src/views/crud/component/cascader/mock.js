import mockUtil from '/src/mock/base';
const options = {
  name: 'ComponentCascader',
  idGenerator: 0,
};
const list = [
  {
    cascader: ['zhinan', 'shejiyuanze', 'yizhi'],
    lazyLoad: ['11', '1101', '110101', '110101001'],
    multiple: [],
  },
  {
    cascader: ['zhinan', 'shejiyuanze', 'yizhi'],
  },
  {
    cascader: ['zhinan', 'shejiyuanze', 'yizhi'],
  },
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;
