<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #cell_$expand="scope">index: {{ scope.$index }} ; row: {{ scope.row }} </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import createCrudOptions from './crud';
  import { useExpose, useCrud } from '@fast-crud/fast-crud';
  import { useMessage, useDialog } from 'naive-ui';
  import { BatchDelete } from './api';
  export default defineComponent({
    name: 'FeatureExpand',
    setup() {
      // crud组件的ref
      const crudRef = ref();
      // crud 配置的ref
      const crudBinding = ref();
      // 暴露的方法
      const { expose } = useExpose({ crudRef, crudBinding });
      // 你的crud配置
      const { crudOptions, selectedRowKeys } = createCrudOptions({ expose });
      // 初始化crud配置
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const { resetCrudOptions } = useCrud({ expose, crudOptions });
      // 你可以调用此方法，重新初始化crud配置
      // resetCrudOptions(options)

      // 页面打开后获取列表数据
      onMounted(() => {
        expose.doRefresh();
      });

      const message = useMessage();
      const dialog = useDialog();

      const handleBatchDelete = () => {
        if (selectedRowKeys.value?.length > 0) {
          dialog.info({
            // negativeText:"取消"
            // positiveText:"确定"
            title: '确认',
            content: `确定要批量删除这${selectedRowKeys.value.length}条记录吗`,
            async onNegativeClick() {
              await BatchDelete(selectedRowKeys.value);
              message.info('删除成功');
              expose.doRefresh();
              selectedRowKeys.value = [];
            },
          });
        } else {
          message.error('请先勾选记录');
        }
      };

      return {
        crudBinding,
        crudRef,
        handleBatchDelete,
      };
    },
  });
</script>
