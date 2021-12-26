import mockUtil from '../../_base';
const options: any = {
  name: 'ComponentDate',
  idGenerator: 0,
};
const date = new Date().getTime();
const dateEnd = date + 1111111111;
const list = [
  {
    timestamp: date,
    datetime: '2019-09-01 11:11:11',
    date: date,
    format: date,
    time: date,
    daterangeStart: date,
    daterangeEnd: dateEnd,
    datetimerangeStart: dateEnd,
    datetimerangeEnd: dateEnd,
  },
  {
    timestamp: date + 200000,
    date: date,
    format: date,
    time: date,
    daterangeStart: date,
    daterangeEnd: dateEnd,
    datetimerangeStart: dateEnd,
    datetimerangeEnd: dateEnd,
  },
  {
    // timestamp: 5555555555,
    date: date,
    format: date,
    time: date,
    daterangeStart: date,
    daterangeEnd: dateEnd,
    datetimerangeStart: dateEnd,
    datetimerangeEnd: dateEnd,
  },
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;
