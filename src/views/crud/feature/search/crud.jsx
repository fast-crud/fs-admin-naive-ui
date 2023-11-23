import * as api from './api';
import { dict } from '@fast-crud/fast-crud';
import { ref } from 'vue';
export default function ({ expose }) {
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
        onFilterChange(e) {
          console.log('onFilterChange', e);
        },
      },
      search: {
        options: {
          //显示校验错误信息
          showFeedback: true,
        },
        //开启校验
        validate: true,
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
          search: {
            show: true,
            rule: [
              {
                required: true,
                message: '请选择状态',
              },
            ],
          },
          type: 'dict-select',
          dict: dict({
            url: '/mock/dicts/OpenStatusEnum?single',
          }),
          form: {
            //注意此处为rule 不是rules
            rule: [
              {
                required: true,
                message: '请选择状态',
              },
            ],
          },
        },
        valueBuilder: {
          title: 'valueBuilder',
          type: 'number',
          search: {
            show: true,
            valueResolve({ key, value, form }) {
              if (value) {
                //可以转化查询条件
                form[key] = value + '';
              }
            },
          },
        },
        customRender: {
          title: '自定义render',
          search: {
            show: true,
          },
          type: 'text',
          form: {
            component: {
              vModel: 'value',
              render({ attrs }) {
                return <n-switch {...attrs} />;
              },
              title: '自定义render，可以继承component的属性,可以触发search的自动查询',
            },
          },
        },
        customRender2: {
          title: '自定义render2',
          search: {
            show: true,
          },
          type: 'text',
          form: {
            component: {
              render({ form }) {
                //注意此处的v-model写法
                return (
                  <n-switch
                    v-model={[form.customRender2, 'value']}
                    title={'render配置在component之下，注意vModel的写法,不能触发search的自动查询'}
                  />
                );
              },
            },
          },
        },
        customRender3: {
          title: '自定义render3',
          search: {
            show: true,
          },
          type: 'text',
          form: {
            render({ form }) {
              //注意此处的v-model写法
              return (
                <n-switch
                  v-model={[form.customRender3, 'value']}
                  title={'render配置在form之下，注意vModel的写法,不能触发search的自动查询'}
                />
              );
            },
          },
        },
      },
    },
  };
}
