import * as api from './api';
export default function ({ expose, props, ctx }) {
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
      table: {
        rowProps: (row) => {
          return {
            style: 'cursor: pointer;',
            onClick: () => {
              ctx.emit('update:modelValue', row.id);
            },
            class: props.modelValue === row.id ? 'fs-current-row' : '',
          };
        },
      },
      request: {
        pageRequest: api.GetList,
        addRequest,
        editRequest,
        delRequest,
      },
      search: { show: false },
      form: {
        wrapper: {
          is: 'n-drawer',
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
        name: {
          title: '用户姓名',
          search: { show: true },
          type: 'text',
          column: {
            sortable: true,
          },
        },
      },
    },
  };
}
