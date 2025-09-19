import * as api from './api';
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
      form: {
        labelWidth: '150px',
        group: {
          type: 'collapse', // tab
          accordion: true, //手风琴模式
          displayDirective: 'show',
          groups: {
            base: {
              slots: {
                //自定义header
                header: (scope) => {
                  return (
                    <span style={{ color: scope.hasError ? 'red' : 'green' }}>
                      商品基础
                      <CheckOutlined style={'margin-left:10px;'} />
                    </span>
                  );
                },
              },
              columns: ['code', 'title', 'images'],
            },
            price: {
              title: '',
              slots: {
                header: (scope) => {
                  return <span style={{ color: scope.hasError ? 'red' : 'green' }}>库存价格</span>;
                },
              },
              columns: ['store', 'price'],
            },
            info: {
              slots: {
                header: (scope) => {
                  return <span style={{ color: scope.hasError ? 'red' : 'green' }}>详情</span>;
                },
              },
              collapsed: true, //默认折叠
              columns: ['intro', 'content', 'slotField'],
            },
            // custom: {
            //   title: "自定义",
            //   collapsed: false,
            //   show(context) {
            //     console.log("custom context", context);
            //     return context.mode === "view";
            //   },
            //   disabled: false,
            //   icon: "n-icon-warning-outline",
            //   columns: ["custom", "custom2"]
            // }
          },
        },
      },
      rowHandle: {
        width: '300px',
        fixed: 'right',
        column: {
          width: '300px',
        },
      },
      columns: {
        title: {
          title: '商品标题',
          type: 'text',
          form: {
            rules: [{ required: true, message: '此项必填' }],
          },
        },
        code: {
          title: '商品代码',
          search: { show: true },
          type: 'text',
          form: {
            rules: [{ required: true, message: '此项必填' }],
          },
        },
        images: {
          title: '图片',
          type: 'image-uploader',
        },
        price: {
          title: '价格',
          sortable: true,
        },
        store: {
          title: '库存',
          type: 'number',
          form: {
            rules: [{ required: true, message: '此项必填' }],
          },
        },
        intro: {
          title: '简介',
          type: 'textarea',
          column: {
            'show-overflow-tooltip': true,
          },
        },
        content: {
          title: '详情',
          type: 'editor-ueditor',
          form: {
            itemProps: { labelWidth: '0px' },
          },
        },
        slotField: {
          title: '插槽示例',
          type: 'text',
        },
        product: {
          title: '未分组字段',
          type: 'text',
          form: {
            col: { span: 24 },
            helper: '未分组的字段会显示在这里，一般来说你应该把所有字段都编入分组内',
          },
        },
      },
    },
  };
}
