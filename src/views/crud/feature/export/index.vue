<template>
  <fs-page>
    <template #header>
      <div class="title">导出</div>
      <div class="more">
        <a target="_blank" href="http://fast-crud.docmirror.cn/api/crud-options/toolbar.html#export"
          >文档</a
        >
      </div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #toolbar-left>
        <n-form :inline="true" label-placement="left" :show-feedback="false">
          <n-form-item label="导出文件类型">
            <n-select
              style="width: 150px"
              v-model:value="fileType"
              :options="[
                { label: 'Excel', value: 'excel' },
                { label: 'CSV', value: 'csv' },
              ]"
            />
          </n-form-item>
          <n-form-item label="数据来源">
            <n-select
              style="width: 150px"
              v-model:value="dataFrom"
              :options="[
                { label: '查询', value: 'search' },
                { label: '本页数据', value: 'local' },
              ]"
            />
          </n-form-item>
        </n-form>
      </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useFs } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';

  export default defineComponent({
    name: 'FeatureExport',
    setup() {
      const fileType = ref('excel');
      const dataFrom = ref('search');
      const context = {
        fileType,
        dataFrom,
      };
      const { crudBinding, crudRef, crudExpose } = useFs({ createCrudOptions, context });
      // 页面打开后获取列表数据
      onMounted(() => {
        crudExpose.doRefresh();
      });

      return {
        crudBinding,
        crudRef,
        ...context,
      };
    },
  });
</script>
