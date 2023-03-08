// @ts-ignore
import mockUtil from '/src/mock/base';
const options: any = {
  name: 'FeatureTabs',
  idGenerator: 0,
};
const list = [
  {
    radio: '1',
    valueBuilder: '321',
  },
  {
    radio: '2',
    valueBuilder: '321',
  },
  {
    radio: '0',
    valueBuilder: '321',
  },
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;
