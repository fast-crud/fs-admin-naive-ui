import * as api from './api';
import { dict } from '@fast-crud/fast-crud';
import { ref } from 'vue';
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
  const selectedIds = ref([]);

  const onSelectionChange = (changed) => {
    console.log('selection', changed);
    selectedIds.value = changed;
  };
  return {
    selectedIds, //返回给index.vue去使用
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest,
      },
      table: {
        rowKey: (row) => row.id, //设置你的主键id获取方式， 默认(row)=>row.id
        checkedRowKeys: selectedIds,
        'onUpdate:checkedRowKeys': onSelectionChange,
      },
      columns: {
        _checked: {
          title: '选择',
          form: { show: false },
          column: {
            type: 'selection',
            align: 'center',
            width: '55px',
            columnSetDisabled: true, //禁止在列设置中选择
            disabled(row, index) {
              return row.id === 1; //设置第一行不允许选择
            },
          },
        },
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
        },
      },
    },
  };
}
