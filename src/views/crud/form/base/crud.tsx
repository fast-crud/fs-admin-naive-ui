import * as api from './api';
import {
  AddReq,
  CreateCrudOptionsProps,
  CreateCrudOptionsRet,
  DelReq,
  EditReq,
  FormWrapperContext,
  ScopeContext,
  UserPageQuery,
  UserPageRes,
  utils,
} from '@fast-crud/fast-crud';
import { computed } from 'vue';
import { useMessage } from 'naive-ui';
export default function ({ crudExpose, context }: CreateCrudOptionsProps): CreateCrudOptionsRet {
  const pageRequest = async (query: UserPageQuery): Promise<UserPageRes> => {
    return await api.GetList(query);
  };
  const editRequest = async ({ form, row }: EditReq) => {
    form.id = row.id;
    return await api.UpdateObj(form);
  };
  const delRequest = async ({ row }: DelReq) => {
    return await api.DelObj(row.id);
  };

  const addRequest = async ({ form }: AddReq) => {
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
        labelWidth: computed(() => {
          return context.labelWidthRef.value + 'px';
        }),
        afterSubmit(context) {
          // context.res 是add或update请求返回结果
          if (context.form.id === 1) {
            message.error('模拟保存失败，阻止弹窗关闭');
            throw new Error('模拟失败，阻止弹窗关闭');
          }
        },
        wrapper: {
          buttons: {
            ok: {
              text: '保存',
            },
            custom: {
              text: '自定义按钮',
              click: async (context: FormWrapperContext) => {
                utils.logger.info('btn context', context);
                message.info('通过自定义按钮，触发保存');
                await context.submit();
                message.info('保存成功');
              },
            },
            customClose: {
              text: '自定义关闭',
              color: 'red',
              click: async (context: FormWrapperContext) => {
                context.close();
              },
            },
          },
        },
      },
      columns: {
        id: {
          title: 'ID',
          type: 'number',
        },
        name: {
          title: '姓名',
          type: 'text',
        },
        renderLabel: {
          title: 'labelRender',
          type: 'text',
          form: {
            title(context: ScopeContext) {
              console.log('render label context:', context);
              return <div style={{ color: 'red' }}>LabelRender</div>;
            },
            helper: {
              text: '配置form.title为一个render方法即可自定义label',
            },
          },
        },
      },
    },
  };
}
