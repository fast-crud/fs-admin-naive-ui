import * as api from './api';
import { dict } from '@fast-crud/fast-crud';

export default function ({ crudExpose }) {
  const pageRequest = async (query) => {
    return await api.GetList(query);
  };
  const editRequest = async ({ form, row }) => {
    if(form.id==null){
      form.id = row.id;
    };
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
        // 表头过滤改变事件
        onFilterChange(filters) {
          console.log('onFilterChange', filters);
          if (filters.remote != null) {
            crudExpose.setSearchFormData({
              form: {
                remote: filters.remote,
              },
            });
            crudExpose.doRefresh();
          }
        },
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
        radio: {
          title: '状态',
          search: { show: true },
          type: 'dict-radio',
          dict: dict({
            url: '/mock/dicts/OpenStatusEnum?single',
          }),
          column: {
            filterOptions: [
              { label: '开', value: '1' },
              { label: '关', value: '0' },
              { label: '停', value: '2' },
            ],
            filter: (value, row) => {
              return row.radio === value;
            },
            sortable: true,
          },
        },
        remote: {
          title: '服务端过滤',
          search: {
            show: true,
            component: {
              multiple: true,
            },
          },
          type: 'dict-radio',
          dict: dict({
            url: '/mock/dicts/OpenStatusEnum?single',
          }),
          column: {
            filterOptions: [
              { label: '开', value: '1' },
              { label: '关', value: '0' },
              { label: '停', value: '2' },
            ],
            filter: (value, row) => {
              return true;
            },
          },
        },
      },
    },
  };
}
