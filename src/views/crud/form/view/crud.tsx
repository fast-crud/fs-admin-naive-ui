import * as api from './api';
import {
  AddReq,
  CreateCrudOptionsProps,
  CreateCrudOptionsRet,
  DelReq,
  dict,
  EditReq,
  UserPageQuery,
} from '@fast-crud/fast-crud';

export default function ({ crudExpose }: CreateCrudOptionsProps): CreateCrudOptionsRet {
  const pageRequest = async (query: UserPageQuery) => {
    return await api.GetList(query);
  };
  const editRequest = async ({ form, row }: EditReq) => {
    if(form.id==null){
      form.id = row.id;
    };
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
      settings: {
        viewFormUseCellComponent: true,
      },
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest,
      },
      columns: {
        name: {
          title: '姓名',
          type: 'text',
          search: {
            show: true,
          },
          form: {
            helper: '添加和编辑时必填，编辑时额外需要校验长度',
            rule: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
            component: {
              maxlength: 5, // 原生属性要写在这里
              props: {
                type: 'text',
                showWordLimit: true,
              },
            },
          },
          editForm: {
            rule: [{ min: 2, max: 5, message: '姓名长度为2-5', trigger: 'blur' }],
          },
        },
        age: {
          title: '年龄',
          type: 'text',
          form: {
            rule: [{ pattern: /^\d+$/, message: '必须为整数', trigger: 'blur' }],
            helper: '正则表达式',
          },
        },
        status: {
          title: '必选',
          type: 'dict-select',
          dict: dict({
            url: '/mock/dicts/OpenStatusEnum',
          }),
          form: {
            rule: [{ required: true, message: '请选择一个选项' }],
          },
        },
        email: {
          title: '邮箱',
          type: 'text',
          form: {
            rule: [{ type: 'email', message: '请填写正确的邮箱', trigger: 'blur' }],
          },
        },
        url: {
          title: 'URL',
          type: 'text',
          form: {
            rule: [{ type: 'url', message: '请填写正确的url', trigger: 'blur' }],
          },
        },
      },
    },
  };
}
