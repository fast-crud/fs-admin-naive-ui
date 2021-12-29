import mockUtil from '../../_base';
import { crudOptions } from './crud-backend';
const options: any = {
  name: 'AdvancedFromBackend',
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
options.copyTimes = 1000;
const mock: Array<any> = mockUtil.buildMock(options);

mock.push({
  url: '/api/crud/AdvancedFromBackend/crud',
  method: 'get',
  response() {
    return {
      code: 0,
      message: 'success',
      data: crudOptions,
    };
  },
});

export default mock;
