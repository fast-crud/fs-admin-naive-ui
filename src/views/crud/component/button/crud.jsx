import * as api from './api';
import { dict, compute } from '@fast-crud/fast-crud';
import { useMessage } from 'naive-ui';
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

  const message = useMessage();
  return {
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest,
      },
      form: {
        //配置表单label的宽度
        labelCol: { span: 6 },
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
        button: {
          title: '按钮',
          search: { show: true },
          type: 'button',
          column: {
            component: {
              type: 'success',
              size: 'small',
              show: compute(({ value }) => {
                //当value为null时，不显示
                return value != null;
              }),
              on: {
                onClick({ row }) {
                  message.success('按钮点击:' + row.button);
                },
              },
            },
          },
        },
        url: {
          title: 'url',
          search: { show: true },
          type: 'text',
          column: {
            show: false,
          },
        },
        link: {
          title: '链接',
          search: { show: true },
          type: 'link',
          column: {
            component: {
              buttonProps: {
                text: true,
              },
              show: compute(({ value }) => {
                //当value为null时，不显示
                return value != null;
              }),
              on: {
                onClick({ row }) {
                  if (row.url) {
                    window.open(row.url);
                  }
                },
              },
            },
          },
          form: {
            title: '按钮文字',
          },
        },
        link2: {
          title: '手写link配置',
          search: { show: true },
          column: {
            component: {
              name: 'fs-button', //列展示组件为button
              tag: 'a',
              type: 'text',
              quaternary: true,
              'text-color': '#2080f0',
              vModel: 'href',
              target: '_blank',
              text: '跳转到百度',
              show: compute(({ value }) => {
                //当value为null时，不显示
                return value != null;
              }),
            },
          },
        },
      },
    },
  };
}
