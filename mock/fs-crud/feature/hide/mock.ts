import mockUtil from '../../_base';
const options: any = {
  name: 'FeatureHide',
  idGenerator: 0,
};
const list = [
  {
    radio: '1',
  },
  {
    radio: '2',
  },
  {
    radio: '0',
  },
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;