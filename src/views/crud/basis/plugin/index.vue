<template>
  <fs-page>
    <template #header>
      <div class="title">
        CrudOptionsPlugin
        <span class="sub"
          >用于合并CrudOptions，做一些可配置化的公共参数；此处演示使用rowSelectionPlugin生成行选择配置,支持跨页选择</span
        >
      </div>
      <div class="more">
        <a
          target="_blank"
          href="http://fast-crud.docmirror.cn/api/crud-options/settings.html#plugins"
          >文档</a
        >
      </div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #pagination-left>
        <n-tooltip>
          批量删除
          <template #trigger>
            <n-button type="primary" @click="context.handleBatchDelete">批量删除</n-button>
          </template>
        </n-tooltip>
      </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import createCrudOptions from './crud';
  import { useFsAsync, useFsRef, useUi } from '@fast-crud/fast-crud';
  import { BatchDelete } from './api';

  export default defineComponent({
    name: 'BasisPlugin',
    setup() {
      const { crudRef, crudBinding, crudExpose, context } = useFsRef();
      const { ui } = useUi();

      context.handleBatchDelete = async () => {
        const { selectedRowKeys } = context;
        if (selectedRowKeys.value?.length > 0) {
          try {
            await ui.messageBox.confirm({
              title: '确认',
              message: `确定要批量删除这${selectedRowKeys.value.length}条记录吗`,
            });
            await BatchDelete(selectedRowKeys.value);
            ui.message.info('删除成功');
            await crudExpose.doRefresh();
            selectedRowKeys.value = [];
          } catch (err) {}
        } else {
          ui.message.error('请先勾选记录');
        }
      };
      // 页面打开后获取列表数据
      onMounted(async () => {
        await useFsAsync({ crudBinding, crudRef, crudExpose, context, createCrudOptions });

        await crudExpose.doRefresh();
      });

      return {
        crudBinding,
        crudRef,
        context,
      };
    },
  });
</script>
