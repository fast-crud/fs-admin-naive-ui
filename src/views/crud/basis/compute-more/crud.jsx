import * as api from './api';
import { ref, computed } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
export default function ({ crudExpose }) {
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

  //普通的ref引用，可以动态切换配置
  const defValueRef = ref('我是动态的默认值');
  const defValueComputed = computed(() => {
    return defValueRef.value;
  });
  return {
    output: {
      defValueRef,
      defValueComputed,
    },
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest,
      },
      table: {
        scroll: {
          x: 1500,
        },
      },
      form: {
        labelCol: { span: 8 },
        wrapperCol: { span: 14 },
      },
      rowHandle: {
        fixed: 'right',
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
        defValue: {
          title: '默认值',
          type: 'text',
          search: { show: true, value: null },
          form: {
            // form.value不支持asyncCompute/Compute, 因为compute需要现有上下文
            value: defValueRef,
          },
        },
      },
    },
  };
}
