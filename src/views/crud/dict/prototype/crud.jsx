import * as api from './api';
import { dict } from '@fast-crud/fast-crud';
import { requestForMock } from '@/utils/http/service';
export default function () {
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

  const remoteDict = dict({
    prototype: true, //这个dict只是一个原型，引用它的dict组件初始化时都会把此dict对象clone一份
    url: '/mock/dicts/OpenStatusEnum',
  });

  const dynamicUrlDict = dict({
    cache: true,
    prototype: true, //这个dict只是一个原型，引用它的dict组件初始化时都会把此dict对象clone一份
    url({ row }) {
      //动态构建url
      return row.switch ? '/mock/dicts/moreOpenStatusEnum' : '/mock/dicts/OpenStatusEnum';
    },
  });
  const dynamicDict = dict({
    cache: true,
    prototype: true, //这个dict只是一个原型，引用它的dict组件初始化时都会把此dict对象clone一份
    url({ row }) {
      //动态构建url
      return row.switch ? '/mock/dicts/moreOpenStatusEnum' : '/mock/dicts/OpenStatusEnum';
    },
    async getData({ url }) {
      //自定义dict 的请求方式
      return await requestForMock({ url });
    },
  });

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
        remote: {
          title: '远程字典',
          search: { show: true },
          dict: remoteDict,
          type: 'dict-select',
        },
        modifyDict: {
          title: '动态修改字典',
          search: { show: true },
          type: 'text',
          form: {
            helper: '此处可以动态切换左边select的options',
            component: {
              name: 'n-switch',
            },
            valueChange({ form, value, getComponentRef }) {
              console.log('form', value);
              let componentRef = getComponentRef('remote');
              if (componentRef == null) {
                return componentRef;
              }
              const targetDict = componentRef.getDict();
              targetDict.url = form.modifyDict
                ? '/mock/dicts/moreOpenStatusEnum?remote'
                : '/mock/dicts/OpenStatusEnum?remote';
              targetDict.reloadDict();
            },
          },
          column: {
            component: {
              name: 'n-switch',
              vModel: 'value',
            },
            valueChange({ value, getComponentRef }) {
              console.log('value', value);
              const targetDict = getComponentRef('remote').getDict();
              targetDict.url = value
                ? '/mock/dicts/moreOpenStatusEnum?remote'
                : '/mock/dicts/OpenStatusEnum?remote';
              targetDict.reloadDict();
            },
          },
        },
        switch: {
          title: 'switch',
          type: 'dict-switch',
          dict: dict({
            data: [
              { value: true, label: '开启' },
              { value: false, label: '关闭' },
            ],
          }),
          form: {
            helper: '动态getData和动态Url根据此字段的值获取不同的dictData',
          },
        },
        dynamicGetData: {
          title: '动态getData',
          dict: dynamicDict,
          type: 'dict-select',
        },
        dynamicUrl: {
          title: '动态Url',
          dict: dynamicUrlDict,
          type: 'dict-select',
        },
      },
    },
  };
}
