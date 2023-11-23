import * as api from './api';
import { dict } from '@fast-crud/fast-crud';
import { requestForMock } from '@/utils/http/service';
export default function () {
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
      form: {
        // 单列布局
        col: { span: 24 },
        // 表单label宽度
        labelWidth: '150px',
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
        cascader: {
          title: '级联',
          search: { show: true },
          type: 'dict-cascader',
          dict: dict({
            cloneable: false,
            isTree: true,
            url: '/mock/dicts/cascaderData?single',
          }),
        },
        lazyLoad: {
          title: '懒加载',
          type: 'dict-cascader',
          dict: dict({
            url: '/crud/tree/GetTreeChildrenByParentId?lazyLoad',
            value: 'code',
            label: 'name',
            isTree: true,
            cache: true,
            prototype: true,
            async getNodesByValues(values) {
              //用于单元格展示
              if (values == null) {
                return [];
              }
              const ret = await requestForMock({
                url: '/mock/tree/GetNodesByValues',
                params: { values },
                method: 'get',
              });
              console.log('getNodes', ret);
              return ret;
            },
          }),
          form: {
            component: {
              name: 'n-cascader',
              options: [
                {
                  value: '11',
                  label: '北京',
                  isLeaf: false,
                },
                {
                  value: '12',
                  label: '天津',
                  isLeaf: false,
                },
              ],
              remote: true,
              async onLoad(option) {
                console.log('node', option);
                const { value } = option;
                let ret = await requestForMock({
                  url: '/mock/tree/GetTreeChildrenByParentId',
                  params: { parentId: value },
                  method: 'get',
                });
                ret = ret.map((item) => {
                  item.value = item.code;
                  item.label = item.name;
                  return item;
                });
                option.children = ret;
                return true;
              },
            },
          },
        },
        strictly: {
          title: '只选父级',
          type: 'dict-cascader',
          dict: dict({
            isTree: true,
            url: '/mock/dicts/cascaderData',
          }),
          form: {
            component: {
              filterable: true,
              multiple: true,
              cascade: true,
              checkStrategy: 'parent',
            },
            helper: {
              render: () => {
                return (
                  <div>
                    选中策略，选中父节点，
                    <a
                      target={'_blank'}
                      href={
                        'https://www.naiveui.com/zh-CN/os-theme/components/cascader#check-strategy'
                      }
                    >
                      更多文档说明
                    </a>
                  </div>
                );
              },
            },
          },
        },
        multiple: {
          title: '多选',
          type: 'dict-cascader',
          dict: dict({
            isTree: true,
            url: '/mock/dicts/cascaderData?multiple',
          }),
          form: {
            component: {
              filterable: true,
              multiple: true,
              checkStrictly: true,
            },
            helper: '可搜索，多选，可只选父节点',
          },
          column: {
            //级联多选展示
            component: {
              multiple: true,
            },
          },
        },
      },
    },
  };
}
