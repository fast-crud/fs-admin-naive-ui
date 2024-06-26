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
        tree: {
          title: '树形选择',
          search: { show: true },
          type: 'dict-tree',
          dict: dict({
            isTree: true,
            url: '/mock/dicts/cascaderData?single',
          }),
          form: {
            component: {
              // keyField: 'value',
            },
          },
        },
        multiple: {
          title: '多选',
          search: { show: true },
          type: 'dict-tree',
          dict: dict({
            cloneable: false,
            isTree: true,
            url: '/mock/dicts/cascaderData?single',
          }),
          form: {
            component: {
              // keyField: 'value',
              'tree-checkable': true,
            },
          },
        },
        fieldReplace: {
          title: '数据value配置',
          search: { show: false },
          type: 'dict-tree',
          dict: dict({
            isTree: true,
            url: '/mock/dicts/littlePca',
            value: 'code',
            label: 'name',
          }),
          form: {
            // component: {
            //   keyField: 'code',
            //   labelField: 'name',
            // },
          },
        },
      },
    },
  };
}
