import * as api from './api';
import { dict, compute } from '@fast-crud/fast-crud';
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
        switch: {
          title: '状态',
          search: { show: true },
          type: 'dict-switch',
          dict: dict({
            data: [
              { value: true, label: '开启' },
              { value: false, label: '关闭' },
            ],
          }),
        },
        cellSwitch: {
          title: 'cell显示',
          search: { show: true },
          type: 'dict-switch',
          form: {
            component: {
              'onUpdate:value': compute((context) => {
                //动态onChange方法测试,可以在事件中获取row数据
                console.log('动态onChange方法', context);
                return () => {
                  console.log('onChange', context.form.switch);
                };
              }),
            },
          },
          column: {
            component: {
              name: 'fs-dict-switch',
              vModel: 'value',
              'onUpdate:value': compute((context) => {
                //动态onChange方法测试
                return () => {
                  console.log('onChange', context.row.switch);
                };
              }),
            },
          },
          dict: dict({
            data: [
              { value: true, label: '开启' },
              { value: false, label: '关闭' },
            ],
          }),
        },
        showTarget: {
          title: '显隐目标',
          type: 'text',
          column: {
            component: {
              name: 'fs-values-format',
              show: compute((context) => {
                //根据cellSwitch字段显隐
                return context.row.cellSwitch === true;
              }),
            },
          },
          search: {
            show: false,
          },
          form: {
            show: compute((context) => {
              console.log('context', context);
              //根据cellSwitch字段显隐
              return context.form.cellSwitch === true;
            }),
          },
        },
      },
    },
  };
}
