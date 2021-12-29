import * as api from './api';
import { ref, shallowRef } from 'vue';
import { compute } from '@fast-crud/fast-crud';
import SubTable from './sub-table/index.vue';
export default function ({ expose, asideTableRef }) {
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
  const currentRow = ref();

  const onCurrentRowChange = (id) => {
    currentRow.value = id;
    asideTableRef.value.setSearchFormData({ form: { gradeId: id } });
    asideTableRef.value.doRefresh();
  };
  return {
    crudOptions: {
      table: {
        rowProps: (row) => {
          const clazz = row.id === currentRow.value ? 'fs-current-row' : '';
          return {
            style: 'cursor: pointer;',
            onClick() {
              onCurrentRowChange(row.id);
            },
            class: clazz,
          };
        },
      },
      pagination: {},
      form: {
        wrapper: {
          is: 'n-drawer',
          size: '50%',
        },
      },
      request: {
        pageRequest: api.GetList,
        addRequest,
        editRequest,
        delRequest,
      },
      rowHandle: {
        width: '240px',
      },
      toolbar: {
        compact: false,
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
        grade: {
          title: '年级',
          search: { show: true },
          type: 'text',
          column: {
            sortable: true,
          },
        },
        nestId: {
          title: '嵌套表格',
          //复合字段类型
          type: ['number', 'colspan'],
          form: {
            // 嵌套表格字段
            rules: [{ required: true, message: '请选择用户' }],
            component: {
              //局部引用子表格，要用shallowRef包裹
              name: shallowRef(SubTable),
              vModel: 'modelValue',
              //将年级id传入子组件
              gradeId: compute(({ form }) => {
                return form.id;
              }),
            },
            // antdv 的跨列配置，需要配置如下三个, 可以通过colspan简化
            // col: { span: 24 },
            // labelCol: { span: 2 },
            // wrapperCol: { span: 21 }
          },
        },
      },
    },
  };
}
