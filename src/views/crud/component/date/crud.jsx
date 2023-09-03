import * as api from './api';
import { utils } from '@fast-crud/fast-crud';
import dayjs from 'dayjs';
console.log('utils', utils);
export default function ({}) {
  const pageRequest = async (query) => {
    return await api.GetList(query);
  };
  const editRequest = async ({ form, row }) => {
    form.id = row.id;
    return await api.UpdateObj(form);
  };
  const delRequest = async ({ row }) => {
    return await api.DelObj(row.id);
  };

  const addRequest = async ({ form }) => {
    return await api.AddObj(form);
  };
  return {
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest,
      },
      table: {
        scrollX: 1700,
      },
      rowHandle: { fixed: 'right' },
      columns: {
        id: {
          title: 'ID',
          key: 'id',
          type: 'number',
          column: {
            width: 50,
          },
          form: {
            show: false,
          },
        },
        timestamp: {
          // naive 默认仅支持时间戳作为日期输入与输出
          title: '时间戳输入',
          type: 'datetime',
          search: {
            show: true,
            width: 185,
          },
        },
        humanize: {
          type: ['datetime', 'time-humanize'],
          title: '人性化时间',
          column: {
            component: {
              options: {
                largest: 2,
              },
            },
          },
        },
        datetime: {
          title: '字符串时间',
          type: 'datetime',
        },
        // format: {
        //   title: '显示格式化',
        //   type: 'datetime',
        //   form: {
        //     component: {
        //       // naive的日期格式化应该用小写的yyyy
        //       format: 'yyyy年MM月dd日 HH:mm',
        //     },
        //   },
        //   column: {
        //     width: 180,
        //     component: {
        //       // 行展示组件使用的dayjs，
        //       format: 'YYYY年MM月DD日 HH:mm',
        //     },
        //   },
        //   valueBuilder({ value, row, key }) {
        //     if (value != null) {
        //       // naive 默认仅支持时间戳作为日期输入与输出
        //       row[key] = dayjs(value).valueOf();
        //     }
        //   },
        //   valueResolver({ value, form, key }) {
        //     if (value != null) {
        //       // naive 默认仅支持时间戳作为日期输入与输出
        //       form[key] = dayjs(value).format('YYYY-MM-DD HH:mm:ss');
        //     }
        //   },
        // },
        date: {
          title: '仅日期',
          type: 'date',
        },
        disabledDate: {
          title: '禁用日期',
          type: 'date',
          form: {
            component: {
              isDateDisabled(time) {
                return time < Date.now();
              },
            },
          },
        },
        time: {
          title: '仅时间',
          type: 'time',
          column: {
            width: 100,
          },
        },
        month: {
          title: '月份',
          type: 'month',
          form: {
            component: {
              valueFormat: 'YYYY-MM-DD HH:mm:ss', //输入值的格式
            },
          },
        },
        // naive 没有周选择器
        // week: {
        //   title: '星期',
        //   type: 'week',
        //   form: {
        //     component: {
        //       valueFormat: 'YYYY-MM-DD HH:mm:ss', //输入值的格式
        //     },
        //   },
        // },
        quarter: {
          title: '季度',
          type: 'quarter',
          form: {
            component: {
              valueFormat: 'YYYY-MM-DD HH:mm:ss', //输入值的格式
            },
          },
        },
        year: {
          title: '年份',
          type: 'year',
          form: {
            component: {
              valueFormat: 'YYYY-MM-DD HH:mm:ss', //输入值的格式
            },
          },
        },
        daterange: {
          title: '日期范围',
          type: 'daterange',
          search: { show: true, col: { span: 8 } },
          valueBuilder({ row }) {
            if (row.daterangeStart && row.daterangeEnd) {
              row.daterange = [row.daterangeStart, row.daterangeEnd];
            }
          },
          valueResolve({ form }) {
            if (form.daterange) {
              form.daterangeStart = form.daterange[0];
              form.daterangeEnd = form.daterange[1];
            }
          },
        },
        datetimerange: {
          title: '日期时间范围',
          type: 'datetimerange',
          valueBuilder({ row }) {
            if (row.datetimerangeStart && row.datetimerangeEnd) {
              row.datetimerange = [row.datetimerangeStart, row.datetimerangeEnd];
            }
          },
          valueResolve({ form }) {
            if (form.datetimerange) {
              form.datetimerangeStart = form.datetimerange[0];
              form.datetimerangeEnd = form.datetimerange[1];
            }
          },
        },
      },
    },
  };
}
