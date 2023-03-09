import mockUtil from '/src/mock/base';

const options = {
  name: 'ComponentDate',
  idGenerator: 0,
};
const time = new Date().getTime();
const list = [
  {
    timestamp: 123123123123,
    humanize: time - 11111111,
    datetime: time,
    date: time,
    format: '2019-09-21 11:11:11',
    time: time,
    month: time,
    week: time,
    quarter: time,
    year: time,
    disabledDate: time,
    daterangeStart: time - 111111111111,
    daterangeEnd: time,
    datetimerangeStart: time - 111111111111,
    datetimerangeEnd: time,
  },
  {
    timestamp: 123123123123,
    humanize: time - 1111,
    datetime: time,
    date: time,
    format: '2019-09-21 11:11:11',
    time: time,
    month: time,
    week: time,
    quarter: time,
    year: time,
    daterangeStart: time - 111111111111,
    daterangeEnd: time,
    datetimerangeStart: time - 111111111111,
    datetimerangeEnd: time,
  },
  {
    // timestamp: 5555555555,
    humanize: time - 111111111,
    datetime: time,
    date: time,
    // time: 12313123334,
    daterangeStart: time - 1111111111111,
    daterangeEnd: time,
    datetimerangeStart: time - 1111111111111,
    datetimerangeEnd: time,
  },
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;
