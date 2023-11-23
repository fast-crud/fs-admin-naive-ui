import * as api from './api';
import { dict } from '@fast-crud/fast-crud';
export default function ({ expose }) {
  const pageRequest = async (query) => {
    return await api.GetList(query);
  };
  const editRequest = async ({ form, row }) => {
    if (form.id == null) {
      form.id = row.id;
    }
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
      table: {},
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
        _expand: {
          title: '',
          form: { show: false },
          column: {
            type: 'expand',
            align: 'center',
            columnSetDisabled: true, //禁止在列设置中选择
            expandable: (rowData) => rowData.radio !== '1',
            renderExpand: (rowData) => {
              return `单选状态：${rowData.radio} `;
            },
          },
        },
        radio: {
          title: '状态',
          search: { show: true },
          type: 'dict-radio',
          dict: dict({
            url: '/mock/dicts/OpenStatusEnum?single',
          }),
        },
      },
    },
  };
}
