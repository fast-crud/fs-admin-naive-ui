<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding" />
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive } from 'vue';
  import { AddReq, DelReq, EditReq, useFs, UserPageQuery, UserPageRes } from '@fast-crud/fast-crud';
  import _ from 'lodash-es';

  //此处为crudOptions配置
  const createCrudOptions = function ({ crudExpose }) {
    //本地模拟后台crud接口方法 ----开始
    const records = reactive([{ id: 1, name: 'Hello World' }]);
    const pageRequest = async (query: UserPageQuery): Promise<UserPageRes> => {
      console.log('table list:', records);
      return {
        records,
        offset: 0,
        limit: 20,
        total: records.length,
      };
    };
    const editRequest = async (req: EditReq) => {
      const { form, row } = req;
      const target = _.find(records, (item) => {
        return row.id === item.id;
      });
      _.merge(target, form);
      return target;
    };
    const delRequest = async (req: DelReq) => {
      const row = req.row;
      _.remove(records, (item) => {
        return item.id === row.id;
      });
    };

    const addRequest = async (req: AddReq) => {
      const form = req.form;
      const maxRecord = _.maxBy(records, (item) => {
        return item.id;
      });
      form.id = (maxRecord?.id || 0) + 1;
      records.push(form);
      return form;
    };
    //本地模拟后台crud接口方法 ----结束

    return {
      crudOptions: {
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
            search: { show: true },
            form: {
              component: {
                maxlength: 20,
              },
            },
          },
        },
      },
    };
  };

  //此处为组件定义
  export default defineComponent({
    name: 'FsCrudFirst',
    setup() {
      const { crudRef, crudBinding, crudExpose } = useFs({ createCrudOptions });

      // 页面打开后获取列表数据
      onMounted(() => {
        crudExpose.doRefresh();
      });

      return {
        crudBinding,
        crudRef,
      };
    },
  });
</script>
