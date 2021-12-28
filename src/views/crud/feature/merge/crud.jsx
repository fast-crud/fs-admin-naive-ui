import * as api from './api';
import { dict } from '@fast-crud/fast-crud';
export default function ({ expose }) {
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
        //总结栏
        summary: (pageData) => {
          return {
            id: {
              value: '合计',
              colSpan: 1,
            },
            radio: {
              value: 1024,
              colSpan: 7,
            },
            cellMerge: {},
            colMerge1: {},
            colMerge2: {},
            header1: {},
            header2: {},
            _rowHandle: {},
          };
        },
      },
      columns: {
        id: {
          title: 'id',
          type: 'text',
        },
        radio: {
          title: '状态',
          search: { show: true },
          type: 'dict-radio',
          dict: dict({
            url: '/crud/dicts/OpenStatusEnum?single',
          }),
        },
        cellMerge: {
          title: '上下合并',
          type: 'text',
          column: {
            //配置行合并
            rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
          },
        },
        colMerge1: {
          title: '左右合并',
          column: {
            align: 'center',
            // 配置列合并
            colSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
            render({ index }, cellRender) {
              // 此处演示自定义render，与单元格合并无关
              if (index === 0) {
                return '我合并了';
              } else if (cellRender) {
                return cellRender();
              }
            },
          },
        },
        colMerge2: {
          title: '左右合并',
        },
        header1: {
          title: '表头合并(我合并了)',
          type: 'text',
          column: {
            //表头合并
            titleColSpan: 2,
          },
        },
        header2: {
          title: '表头合并',
          type: 'text',
          column: {
            titleColSpan: 0,
          },
        },
      },
    },
  };
}
