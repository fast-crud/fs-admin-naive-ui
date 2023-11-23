import * as api from './api';
import { useCompute } from '@fast-crud/fast-crud';
import { useMessage } from 'naive-ui';
import { ref, computed } from 'vue';
import { requestForMock } from '@/utils/http/service';

const { asyncCompute, compute } = useCompute();

// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
export default function ({ crudExpose }) {
  const message = useMessage();
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

  //普通的ref引用，可以动态切换配置
  const showRef = ref(false);
  const showTableRef = ref(true);
  const showTableComputed = computed(() => {
    return showTableRef.value;
  });
  return {
    output: {
      showRef,
      showTableRef,
    },
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest,
      },
      table: {
        //通过switch动态显隐table
        show: showTableComputed, //不仅支持computed，直接传showTableRef也是可以的
      },
      form: {
        labelWidth: 120,
      },
      rowHandle: {
        fixed: 'right',
        buttons: {
          edit: {
            show: compute(({ row }) => {
              return row.editable;
            }),
          },
          remove: {
            show: compute(({ row }) => {
              return row.editable;
            }),
          },
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
        refSwitch: {
          title: 'ref引用切换',
          type: 'text',
          form: {
            // switch组件在 index.vue 通过插槽显示
            helper: '点我切换右边的输入框显示',
          },
        },
        ref: {
          title: '根据ref引用显示',
          type: ['text'],
          form: {
            component: {
              show: showRef,
            },
            helper: '我会根据showRef进行显隐',
          },
        },
        compute: {
          title: 'compute',
          search: { show: false },
          type: 'text',
          column: {
            component: {
              name: 'n-switch',
              vModel: 'value',
            },
            valueChange({ value, row }) {
              console.log('valueChange', value, row);
            },
          },
          form: {
            component: {
              name: 'n-switch',
              vModel: 'value',
            },
            helper: '点我触发动态计算',
          },
        },
        shower: {
          title: '根据compute显示',
          search: { show: false },
          type: 'button',
          form: {
            component: {
              // 这里组件是否显示是通过计算获得的
              show: compute(({ form }) => {
                return form.compute;
              }),
            },
          },
          column: {
            width: 250,
            component: {
              show: compute(({ row }) => {
                return row.compute;
              }),
            },
          },
        },
        remote: {
          title: 'asyncCompute',
          search: { show: true },
          type: 'text',
          form: {
            component: {
              name: 'fs-dict-select',
              vModel: 'value',
              placeholder: '异步获取options',
              // 这里n-select组件的options是通过计算获得的
              options: asyncCompute({
                // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
                async asyncFn(watchValue, context) {
                  const url = '/mock/dicts/OpenStatusEnum?remote';
                  console.log('执行异步方法1', url, watchValue);
                  const opts = await requestForMock({ url });
                  return opts;
                },
              }),
            },
            helper: '我的options是异步计算远程获取的,只会获取一次',
          },
        },
        remote2: {
          title: '监听switch触发异步计算',
          search: { show: false },
          type: 'text',
          form: {
            title: '监听switch',
            component: {
              name: 'fs-dict-select',
              vModel: 'value',
              placeholder: '异步计算远程获取options',
              // 这里n-select组件的options是通过计算获得的
              options: asyncCompute({
                watch({ form }) {
                  return form.compute || false;
                },
                async asyncFn(watchValue) {
                  message.info('监听switch,触发远程获取options');
                  const url = watchValue
                    ? '/mock/dicts/OpenStatusEnum?remote'
                    : '/mock/dicts/moreOpenStatusEnum?remote';
                  console.log('执行异步方法2', url, watchValue);
                  return await requestForMock({ url });
                },
              }),
            },
            helper: '监听其他属性修改后，触发重新计算',
          },
          column: {
            width: 200,
          },
        },
        editable: {
          title: '可编辑',
          search: { show: false },
          type: 'text',
          column: {
            fixed: 'right',
            component: {
              name: 'n-switch',
              vModel: 'value',
            },
          },
          form: {
            show: false,
          },
        },
      },
    },
  };
}
