import * as api from './api';
import {
  AddReq,
  CreateCrudOptionsProps,
  CreateCrudOptionsRet,
  DelReq,
  EditReq,
  UserPageQuery,
  UserPageRes,
} from '@fast-crud/fast-crud';

export default function ({ crudExpose }: CreateCrudOptionsProps): CreateCrudOptionsRet {
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

  return {
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest,
      },
      form: {
        labelWidth: '200px',
      },
      columns: {
        name: {
          title: '表单字段组件周围的render',
          type: 'text',
          form: {
            helper: '演示组件周围自定义render',
            topRender({ value }) {
              return <n-tag type="error">topRender</n-tag>;
            },
            bottomRender({ value }) {
              return <n-tag type="error">bottomRender {value ?? ''}</n-tag>;
            },
            prefixRender({ value }) {
              return <n-tag type="error">prefixRender</n-tag>;
            },
            suffixRender({ value }) {
              return <n-tag type="error">suffixRender</n-tag>;
            },
          },
        },
        render: {
          title: '字段组件本身render',
          type: 'text',
          form: {
            helper: '组件本身render',
            render({ form }) {
              return (
                <div>
                  <n-input v-model:value={[form.render]} />
                  render value : {form.render}
                </div>
              );
            },
          },
        },
      },
    },
  };
}
